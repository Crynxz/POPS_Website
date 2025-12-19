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
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(data.email);
      if (existingEntry) {
        console.log("Duplicate email detected:", data.email);
        return res.status(409).json({ 
          message: "Este email já está registado na nossa lista de espera." 
        });
      }

      const entry = await storage.createWaitlistEntry(data);
      console.log("Entry created successfully:", entry.id);

      if (process.env.RESEND_API_KEY) {
        try {
          console.log("Initializing Resend with key:", process.env.RESEND_API_KEY.substring(0, 7) + "...");
          const resend = new Resend(process.env.RESEND_API_KEY);
          
          const emailResponse = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Bem-vindo à lista de espera da POPS!',
            html: `<p>Olá ${data.name},</p><p>Obrigado por te juntares à nossa lista de espera da POPS! Entraremos em contacto assim que tivermos novidades.</p>`
          });
          
          console.log("Resend API response:", emailResponse);
          
          if (emailResponse.error) {
            console.error("Resend error detail:", emailResponse.error);
          } else {
            console.log("Email sent successfully, ID:", emailResponse.data?.id);
          }
        } catch (e) {
          console.error("Resend execution failed:", e);
        }
      } else {
        console.warn("RESEND_API_KEY not found in environment variables.");
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
