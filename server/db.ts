import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '@shared/schema';

let pool: pg.Pool | null = null;
let db: any = null;

if (process.env.DATABASE_URL) {
  try {
    pool = new pg.Pool({ 
      connectionString: process.env.DATABASE_URL,
      // Configurações recomendadas para Serverless
      max: 1,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
    db = drizzle(pool, { schema });
  } catch (err) {
    console.error("Failed to initialize database pool:", err);
  }
}

export { pool, db };