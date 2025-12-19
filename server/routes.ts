import type { Express } from "express";
import { storage } from "./storage";
import { insertWaitlistSchema } from "../shared/schema";
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
      
      // 1. Validar dados
      const data = insertWaitlistSchema.parse(req.body);
      
      // 2. Verificar duplicados
      const existingEntry = await storage.getWaitlistEntryByEmail(data.email);
      if (existingEntry) {
        return res.status(409).json({ message: "Este email já está registado." });
      }

      // 3. Guardar no Storage (com fallback para memória se o DB falhar)
      const entry = await storage.createWaitlistEntry(data);
      
      // 4. Tentar enviar email (não bloqueia a resposta se falhar)
      if (process.env.RESEND_API_KEY) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera!</p>`
          });
        } catch (e) {
          console.error("Resend error:", e);
        }
      }

      res.status(201).json(entry);
    } catch (error: any) {
      console.error("Waitlist handler error:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos", details: error.errors });
      }

      // DEVOLVE O ERRO REAL PARA O CLIENTE (DEBUG)
      res.status(500).json({ 
        message: "Erro no servidor",
        debug: error.message || "Unknown error"
      });
    }
  });
}