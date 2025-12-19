import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

// Initialize Resend if API key is provided
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export function registerRoutes(app: Express): Server {
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "pong" });
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      console.log("Waitlist submission start:", req.body);
      const data = insertWaitlistSchema.parse(req.body);
      console.log("Validation success:", data);
      
      const entry = await storage.createWaitlistEntry(data);
      console.log("Storage success:", entry);
      
      // Send automated email if Resend is configured
      if (resend) {
        try {
          console.log("Attempting to send email to:", data.email);
          const emailResult = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera...</p>`
          });
          console.log("Email result:", emailResult);
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // We don't fail the request if the email fails
        }
      }

      res.status(201).json(entry);
    } catch (error) {
      console.error("Waitlist error caught:", error);
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Dados de registo inválidos", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}