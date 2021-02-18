import next from 'next'
import express from 'express'

import { initDatabase } from './database'

import { getUserRouter } from './routes/user'

const PORT = process.env.PORT || 8080
const DEV = process.env.NODE_ENV !== 'production'

;(async function main() {
  const database = await initDatabase()

  const server = express()

  server.use('/api/user', getUserRouter(database))

  if (!DEV) {
    // compile and serve frontend
    const app = next({ dev: false })
    const handle = app.getRequestHandler()
    await app.prepare()
    server.all('*', (req, res) => handle(req, res))
  }

  server.listen(PORT, () => console.log(`Ready on http://localhost:${PORT}`))
}())
