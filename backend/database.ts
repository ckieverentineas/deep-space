import 'reflect-metadata'
import { createConnection } from 'typeorm'

import User from './entity/User'

export async function initDatabase() {
  const entities = [
    User,
  ]

  const connection = await createConnection({
    type: 'sqlite',
    database: './storage.sql',
    synchronize: true,
    entities,
  })

  return {
    userRepository: connection.getRepository(User),
  }
}

export type Database = ReturnType<typeof initDatabase> extends Promise<infer R> ? R : never
