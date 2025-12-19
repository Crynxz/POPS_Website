import type { Express } from "express";
import { createServer, type Server } from "http";
// import { storage } from "./storage"; // <--- COMMENT THIS OUT
import { insertWaitlistSchema } from "../shared/schema"; // <--- USE RELATIVE PATH
import { ZodError } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "pong" });
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      console.log("Form submission received:", req.body);
      const data = insertWaitlistSchema.parse(req.body);
      
      // const entry = await storage.createWaitlistEntry(data); // <--- COMMENT OUT DB ACTION

      if (resend) {
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera.</p>`
          });
      }

      // Return a fake success response since we didn't save to DB
      res.status(201).json({ id: 1, ...data, emailSent: !!resend }); 
    } catch (error) {
      // ... keep your existing error handling ...
      console.error(error);
      res.status(500).json({ message: "Internal Error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}