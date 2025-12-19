import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from "resend";

// O import do Resend deve estar SEMPRE aqui no topo
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export function registerRoutes(app: Express): Server {
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "pong" });
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      console.log("Waitlist submission start:", req.body);
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      
      if (resend) {
        try {
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera...</p>`
          });
          console.log("Email enviado com sucesso para:", data.email);
        } catch (emailError) {
          console.error("Erro ao enviar email:", emailError);
        }
      }

      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Dados inválidos", details: error.errors });
      } else {
        console.error("Erro na waitlist:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  });

  return createServer(app);
}
