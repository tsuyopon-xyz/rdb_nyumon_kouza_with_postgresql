import type { Config } from 'drizzle-kit'

export default {
  schema: './src/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: '127.0.0.1',
    port: 5433,
    user: 'admin',
    password: 'admin',
    database: 'shop',
  },
} satisfies Config
