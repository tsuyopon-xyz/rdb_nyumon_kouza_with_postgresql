import {
  serial,
  varchar,
  integer,
  timestamp,
  pgTable,
} from 'drizzle-orm/pg-core'

export const categories = pgTable('categories', {
  id: integer('id').primaryKey(),
  name: varchar('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  categoryId: integer('category_id')
    .notNull()
    .references(() => categories.id, { onUpdate: 'cascade' }),
  price: integer('price'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
