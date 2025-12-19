import type { Express } from "express";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

// O import do Resend deve estar SEMPRE aqui no topo
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export function registerRoutes(app: Express) {
  // GET endpoint for testing
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "pong" });
  });

  // POST endpoint for waitlist
  app.post("/api/waitlist", async (req, res) => {
    try {
      console.log("Form submission start:", req.body);
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      
      if (resend) {
        try {
          console.log("Attempting to send email to:", data.email);
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera da POPS. Entraremos em contacto em breve.</p>`
          });
          console.log("Resend email sent successfully");
        } catch (emailError) {
          console.error("Resend API error:", emailError);
        }
      }

      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
        res.status(400).json({ message: "Dados inválidos", details: error.errors });
      } else {
        console.error("Internal server error:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  });
}
