import { eq } from 'drizzle-orm'
import { db, connection } from './db'
import { categories, products } from './schema'

async function selectData() {
  // シンプルなクエリ
  const result1 = await db.select().from(products)

  // WHEREで条件を絞り込んだクエリ
  const result2 = await db
    .select({
      productName: products.name,
      categoryId: products.categoryId,
    })
    .from(products)
    .where(eq(products.categoryId, 2))

  // 内部結合をしているクエリ
  const result3 = await db
    .select()
    .from(products)
    .innerJoin(categories, eq(products.categoryId, categories.id))

  console.log('---result1の結果---')
  console.log(result1)
  console.log('---result2の結果---')
  console.log(result2)
  console.log('---result3の結果---')
  console.log(result3)

  connection.end()
}

selectData()
