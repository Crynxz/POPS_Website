import type { Express } from "express";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

export function registerRoutes(app: Express) {
  app.get("/api/ping", (_req, res) => {
    res.json({ 
      status: "alive", 
      resend_key: !!process.env.RESEND_API_KEY,
      db_url: !!process.env.DATABASE_URL 
    });
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      console.log("Waitlist submission start:", req.body);
      
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      
      console.log("Entry created:", entry.id);

      if (process.env.RESEND_API_KEY) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera!</p>`
          });
          console.log("Email status: sent");
        } catch (e) {
          console.error("Email failed but data was saved:", e);
        }
      }

      res.status(201).json(entry);
    } catch (error) {
      console.error("Waitlist handler error:", error);
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Dados inválidos", details: error.errors });
      } else {
        // Se a base de dados falhar (ex: tabela não existe), damos um erro 500 mais claro
        res.status(500).json({ 
          message: "Erro no servidor ao processar registo",
          error: error instanceof Error ? error.message : "Unknown error"
        });
      }
    }
  });
}