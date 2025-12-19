import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import * as schema from '@shared/schema';

let pool: pkg.Pool | null = null;
let db: any = null;

if (process.env.DATABASE_URL) {
  try {
    pool = new Pool({ 
      connectionString: process.env.DATABASE_URL,
      max: 1,
    });
    db = drizzle(pool, { schema });
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

export { pool, db };
