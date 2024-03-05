import { db, connection } from './db'
import { categories, products } from './schema'

async function insertData() {
  try {
    await db.insert(categories).values([
      { id: 1, name: 'book' },
      { id: 2, name: 'food' },
      { id: 3, name: 'drink' },
    ])

    await db.insert(products).values([
      { name: 'SQLを学ぼう', categoryId: 1, price: 1980 },
      { name: 'コーラ', categoryId: 3, price: 120 },
      { name: 'チョコレート', categoryId: 2, price: 90 },
    ])
  } catch (error) {
    console.error('[error]', error)
  }

  connection.end()
}

insertData()
