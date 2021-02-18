import { Router } from 'express'

import { Database } from '../database'

export function getUserRouter(database: Database): Router {
  const { userRepository } = database

  const router = Router()

  router.get('/get', async (req, res) => {
    const { id } = req.query

    const user = await userRepository.findOne({ where: { id } })

    res.json({ user })
  })

  return router
}
