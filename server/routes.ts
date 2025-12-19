import type { Express } from "express";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export function registerRoutes(app: Express) {
  // Health check endpoint
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "pong" });
  });

  // Waitlist submission endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      
      if (resend) {
        try {
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera. Entraremos em contacto brevemente.</p>`
          });
        } catch (emailError) {
          console.error("Resend error:", emailError);
        }
      }

      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Dados inválidos", details: error.errors });
      } else {
        console.error("Server error:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  });
}
