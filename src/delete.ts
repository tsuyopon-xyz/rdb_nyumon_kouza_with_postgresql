import { eq } from 'drizzle-orm'
import { db, connection } from './db'
import { products } from './schema'

async function deleteData() {
  await db.delete(products).where(eq(products.categoryId, 9999))

  connection.end()
}

deleteData()
