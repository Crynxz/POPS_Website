import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

// Initialize Resend if API key is provided
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      
      // Send automated email if Resend is configured
      if (resend) {
        try {
          await resend.emails.send({
            from: 'POPS <welcome@popspt.com>',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera...</p>`
          });
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // We don't fail the request if the email fails
        }
      }

      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Dados de registo inválidos", 
          details: error.errors 
        });
      } else {
        console.error("Waitlist error:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}