import express from 'express'
import { createServer as createViteServer } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const DEFAULT_PORT = 5000

async function startServer() {
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    root: path.resolve(__dirname, '../client'),
    server: { middlewareMode: true },
    appType: 'spa',
    configFile: path.resolve(__dirname, '../vite.config.ts'),
  })

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares)

  // API routes
  app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express' })
  })

  // Fallback to index.html for SPA
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
