import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // GET endpoint for testing
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "pong" });
  });

  // POST endpoint for waitlist
  app.post("/api/waitlist", async (req, res) => {
    try {
      console.log("Form submission received:", req.body);
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      
      if (resend) {
        try {
          // Use 'onboarding@resend.dev' for sandbox testing
          // You can ONLY send to your own email address in sandbox mode
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera da POPS. Entraremos em contacto em breve.</p>`
          });
          console.log("Resend email sent successfully to", data.email);
        } catch (emailError) {
          console.error("Resend API error:", emailError);
          // We continue even if email fails to return the DB entry
        }
      } else {
        console.warn("Resend not configured. Skipping email.");
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

  const httpServer = createServer(app);
  return httpServer;
}