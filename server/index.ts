import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const DEFAULT_PORT = 5000

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Production: Serve static files from 'public' directory
    const publicDir = path.resolve(__dirname, 'public')
    
    app.use(express.static(publicDir))
    
    // Fallback to index.html for SPA
    app.use('*', (req, res) => {
      res.sendFile(path.resolve(publicDir, 'index.html'))
    })
  } else {
    // Development: Use Vite middleware
    const { createServer: createViteServer } = await import('vite')
    
    const vite = await createViteServer({
      root: path.resolve(__dirname, '../client'),
      server: { middlewareMode: true },
      appType: 'spa',
      configFile: path.resolve(__dirname, '../vite.config.ts'),
    })

    app.use(vite.middlewares)

    app.use('*', async (req, res) => {
      try {
        const template = await vite.transformIndexHtml(req.originalUrl, 
          fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf-8')
        )
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
      } catch (e) {
        vite.ssrFixStacktrace(e as Error)
        res.status(500).end((e as Error).message)
      }
    })
  }

  // API routes (ensure these are registered before the SPA fallback if possible, 
  // but for prod static middleware handles existing files first, so order matters for API vs wildcard)
  // Re-registering API routes here if they were lost? 
  // The original code had app.get('/api/data'...) AFTER app.use(vite.middlewares).
  // In Express, order matters.
  // Move API routes BEFORE the catch-all handler.

  app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express' })
  })

  // Try to start server on port, or find an available port
  function tryListen(port: number): void {
    const server = app.listen(port, () => {
      console.log(`✨ Server running at http://localhost:${port}`)
    }).on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        if (port === DEFAULT_PORT) {
          console.log(`⚠️  Port ${port} is in use, trying port ${port + 1}...`)
          tryListen(port + 1)
        } else {
          console.error(`❌ Port ${port} is also in use. Please free up a port or kill the process.`)
          console.error(`   To find the process: lsof -ti:${port}`)
          console.error(`   To kill it: kill -9 $(lsof -ti:${port})`)
          process.exit(1)
        }
      } else {
        throw err
      }
    })
  }

  tryListen(DEFAULT_PORT)
}

startServer()
