//drizzle.config.ts
import * as dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'

dotenv.config()

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    user: "postgres.bhamjbzmxvcrwfkxcafv",
    password: "gJdokvKV9vA9YJ",
    host: "aws-0-us-east-1.pooler.supabase.com",
    port: 5432,
    database: "postgres",
  }
} satisfies Config