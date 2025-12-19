import express from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

// 1. ROTAS DE DIAGNÓSTICO (Sem dependências pesadas)
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Function is alive",
    node: process.version,
    memory: process.memoryUsage().heapUsed
  });
});

app.get("/api/ping", (req, res) => {
  res.json({ status: "online", timestamp: new Date().toISOString() });
});

// 2. ROTA DA WAITLIST (Importações dinâmicas para evitar crash no boot)
app.post("/api/waitlist", async (req, res) => {
  try {
    console.log("Processing waitlist request...");
    
    // Importações "Lazy"
    const pg = await import("pg");
    const { drizzle } = await import("drizzle-orm/node-postgres");
    const { pgTable, text, serial, timestamp } = await import("drizzle-orm/pg-core");
    const { createInsertSchema } = await import("drizzle-zod");

    // Definição local do Schema para garantir isolamento total
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

    const data = insertSchema.parse(req.body);

    // Ligação à Base de Dados
    if (process.env.DATABASE_URL) {
      const Pool = pg.default.Pool || (pg as any).Pool;
      const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        max: 1,
        ssl: { rejectUnauthorized: false }
      });
      const db = drizzle(pool);
      
      await db.insert(waitlist).values({
        ...data,
        createdAt: new Date()
      });
      console.log("Database save: Success");
      await pool.end(); // Fecha a ligação imediatamente (importante para serverless)
    }

    // Enviar Email via Resend
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
        console.log("Email send: Success");
      } catch (emailErr) {
        console.error("Resend error:", emailErr);
      }
    }

    res.status(201).json({ success: true });

  } catch (error: any) {
    console.error("Waitlist Error:", error);
    res.status(error instanceof z.ZodError ? 400 : 500).json({ 
      message: "Erro no processamento",
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

export default app;