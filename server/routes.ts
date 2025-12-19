import type { Express } from "express";
import { storage } from "./storage";
import { insertWaitlistSchema } from "../shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export function registerRoutes(app: Express) {
  // Health check endpoint
  app.get("/api/ping", (_req, res) => {
    res.json({ 
      status: "alive", 
      resend_key: !!process.env.RESEND_API_KEY,
      db_url: !!process.env.DATABASE_URL 
    });
  });

  // Waitlist submission endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      console.log("Waitlist submission start:", req.body);
      
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      
      console.log("Entry created successfully");

      if (resend) {
        try {
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera!</p>`
          });
          console.log("Email sent");
        } catch (e) {
          console.error("Email failed:", e);
        }
      }

      res.status(201).json(entry);
    } catch (error) {
      console.error("Waitlist error:", error);
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Dados inválidos", details: error.errors });
      } else {
        res.status(500).json({ 
          message: "Erro no servidor",
          error: error instanceof Error ? error.message : "Unknown error"
        });
      }
    }
  });
}
