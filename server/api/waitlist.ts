import type { Express, Request, Response } from "express";
import { storage } from "../storage";
import { insertWaitlistSchema } from "../../shared/schema";
import { ZodError } from "zod";

export function registerWaitlistRoutes(app: Express) {
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const existingEntry = await storage.getWaitlistEntryByEmail(data.email);
      if (existingEntry) {
        return res.status(409).json({ message: "Email já registado." });
      }

      const entry = await storage.createWaitlistEntry(data);

      if (process.env.RESEND_API_KEY) {
        try {
          const { Resend } = await import("resend");
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera!</p>`
          });
        } catch (e) {
          console.error("Email failed:", e);
        }
      }

      res.status(201).json(entry);
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos", details: error.errors });
      }
      res.status(500).json({ message: "Erro no servidor", error: error.message });
    }
  });
}
