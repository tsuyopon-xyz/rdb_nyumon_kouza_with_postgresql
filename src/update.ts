import { eq } from 'drizzle-orm'
import { db, connection } from './db'
import { categories } from './schema'

async function updateData() {
  await db.update(categories).set({ id: 9999 }).where(eq(categories.id, 1))

  connection.end()
}

updateData()
