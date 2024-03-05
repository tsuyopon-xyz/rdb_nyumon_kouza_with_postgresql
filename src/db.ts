import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import config from '../drizzle.config'

export const connection = postgres({
  ...config.dbCredentials,
  max: 1,
})
export const db = drizzle(connection)
