import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '../shared/schema';

// Algumas versões de pg requerem desestruturação diferente em ESM
const Pool = pg.Pool || (pg as any).default?.Pool;

let dbInstance: any = null;

export function getDb() {
  if (dbInstance) return dbInstance;

  const url = process.env.DATABASE_URL;
  if (!url) return null;

  try {
    const pool = new Pool({ 
      connectionString: url,
      max: 1,
      ssl: { rejectUnauthorized: false }
    });
    
    dbInstance = drizzle(pool, { schema });
    return dbInstance;
  } catch (err) {
    console.error("Database initialization failed:", err);
    return null;
  }
}