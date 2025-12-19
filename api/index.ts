import { z } from "zod";

export default async function handler(req: any, res: any) {
  const { method, url } = req;

  // 1. Health Check & Ping (Ultra-fast, no dependencies)
  if (url.endsWith("/health") || url.endsWith("/ping")) {
    return res.status(200).json({ 
      status: "ok", 
      source: "native-vercel-handler",
      timestamp: new Date().toISOString() 
    });
  }

  // 2. Only allow POST for waitlist
  if (method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("Starting waitlist process for:", req.body?.email);

    // Dynamic imports inside the handler to prevent boot-time crashes
    const pg = await import("pg");
    const { drizzle } = await import("drizzle-orm/node-postgres");
    const { pgTable, text, serial, timestamp } = await import("drizzle-orm/pg-core");
    const { createInsertSchema } = await import("drizzle-zod");

    // Define Schema
    const waitlist = pgTable("waitlist", {
      id: serial("id").primaryKey(),
      name: text("name").notNull(),
      email: text("email").notNull(),
      phone: text("phone"),
      birthDate: text("birth_date"),
      location: text("location"),
      profile: text("profile"),
      interest: text("interest"),
      createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    });

    const insertSchema = createInsertSchema(waitlist).extend({
      email: z.string().email(),
    });

    // Validate Data
    const data = insertSchema.parse(req.body);

    // Database Operation
    let databaseSaved = false;
    let dbErrorMessage = null;

    if (process.env.DATABASE_URL) {
      // Ensure the URL has pgbouncer=true if using port 6543
      let connectionString = process.env.DATABASE_URL;
      if (connectionString.includes(":6543") && !connectionString.includes("pgbouncer=true")) {
        connectionString += (connectionString.includes("?") ? "&" : "?") + "pgbouncer=true";
      }

      const Pool = (pg as any).default?.Pool || (pg as any).Pool;
      const pool = new Pool({
        connectionString,
        max: 1,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 10000
      });
      
      try {
        const db = drizzle(pool);
        // Explicitly map columns to be safe
        await db.insert(waitlist).values({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          birthDate: data.birthDate || null,
          location: data.location || null,
          profile: data.profile || null,
          interest: data.interest || null,
          createdAt: new Date()
        });
        console.log("DATABASE: Insert successful");
        databaseSaved = true;
      } catch (dbErr: any) {
        dbErrorMessage = dbErr.message;
        console.error("DATABASE ERROR:", dbErr.message);
      } finally {
        await pool.end();
      }
    }

    // Email Operation
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: data.email,
          subject: 'Bem-vindo à lista de espera da POPS!',
          html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera da POPS!</p>`
        });
        emailSent = true;
      } catch (emailErr) {
        console.error("EMAIL ERROR:", emailErr);
      }
    }

    return res.status(201).json({ 
      success: true, 
      database: databaseSaved, 
      email: emailSent,
      error: dbErrorMessage 
    });

  } catch (error: any) {
    console.error("Vercel Handler Error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Dados inválidos", details: error.errors });
    }

    return res.status(500).json({ 
      message: "Erro interno no servidor",
      debug: error.message,
      stack: error.stack
    });
  }
}
