import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import * as schema from '../shared/schema';

let dbInstance: any = null;

export function getDb() {
  // Se já existir uma ligação, reutiliza-a
  if (dbInstance) return dbInstance;

  // Se não houver URL, não tenta ligar
  if (!process.env.DATABASE_URL) {
    return null;
  }

  try {
    const pool = new Pool({ 
      connectionString: process.env.DATABASE_URL,
      max: 1,
      ssl: { rejectUnauthorized: false }
    });
    
    dbInstance = drizzle(pool, { schema });
    return dbInstance;
  } catch (err) {
    console.error("Database initialization error:", err);
    return null;
  }
}