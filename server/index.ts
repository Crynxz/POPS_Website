import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const DEFAULT_PORT = 5000

// API routes - Register these BEFORE the SPA fallback
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express' })
})

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Production: Serve static files from 'public' directory
    const publicDir = path.resolve(__dirname, 'public')
    
    app.use(express.static(publicDir))
    
    // Fallback to index.html for SPA
    app.use('*', (req, res) => {
      // Check if it's an API route first (though they are registered above, 
      // this is just to be safe if any other wildcards exist)
      if (req.originalUrl.startsWith('/api')) {
        return res.status(404).json({ error: 'Not Found' })
      }
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

  // Only listen if not running on Vercel
  if (!process.env.VERCEL) {
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
            process.exit(1)
          }
        } else {
          throw err
        }
      })
    }

    tryListen(DEFAULT_PORT)
  }
}

startServer()

export default app
