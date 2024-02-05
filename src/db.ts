import 'dotenv/config'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './db/schema'

if(!process.env.DATABASE_URL){
  throw new Error("DATABASE_URL is missing");
}

const connectionString = process.env.DATABASE_URL

//@ts-ignore
// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client, { schema });

export default db;