import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import * as schema from '../shared/schema';

let dbInstance: any = null;

export function getDb() {
  if (dbInstance) return dbInstance;

  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn("DATABASE_URL is missing. Database features will be unavailable.");
    return null;
  }

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
