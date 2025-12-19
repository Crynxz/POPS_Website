import express from "express";
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import pg from "pg";

// 1. DEFINIÇÃO DO SCHEMA (Igual ao seu Supabase)
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

const insertWaitlistSchema = createInsertSchema(waitlist).extend({
  email: z.string().email(),
});

// 2. INICIALIZAÇÃO DA APP
const app = express();
app.use(express.json());

// 3. ROTAS DE DIAGNÓSTICO
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Vercel function is healthy" });
});

app.get("/api/ping", (req, res) => {
  res.json({ status: "alive", timestamp: new Date().toISOString() });
});

// 4. ROTA DA WAITLIST (Lógica completa)
app.post("/api/waitlist", async (req, res) => {
  try {
    const data = insertWaitlistSchema.parse(req.body);

    // Ligação "Lazy" à base de dados para evitar crashes no arranque
    if (process.env.DATABASE_URL) {
      try {
        const pool = new pg.Pool({
          connectionString: process.env.DATABASE_URL,
          max: 1,
          ssl: { rejectUnauthorized: false }
        });
        const db = drizzle(pool);
        
        // Guardar no Supabase
        await db.insert(waitlist).values({
          ...data,
          createdAt: new Date()
        });
        
        console.log("Saved to Supabase:", data.email);
      } catch (dbErr) {
        console.error("Database error, record not saved to permanent DB:", dbErr);
        // Continuamos para tentar enviar o email pelo menos
      }
    }

    // Enviar Email
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
      } catch (emailErr) {
        console.error("Resend error:", emailErr);
      }
    }

    res.status(201).json({ success: true, message: "Registo recebido" });

  } catch (error: any) {
    console.error("Form error:", error);
    res.status(error instanceof z.ZodError ? 400 : 500).json({ 
      message: "Erro ao processar pedido",
      error: error.message 
    });
  }
});

export default app;
