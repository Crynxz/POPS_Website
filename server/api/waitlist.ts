import type { Express, Request, Response } from "express";
import { storage } from "../storage";
import { insertWaitlistSchema } from "../../shared/schema";
import { ZodError } from "zod";

export function registerWaitlistRoutes(app: Express) {
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // 1. Validar dados recebidos
      const data = insertWaitlistSchema.parse(req.body);

      // 2. Verificar se já existe na base de dados local
      const existingEntry = await storage.getWaitlistEntryByEmail(data.email);
      if (existingEntry) {
        return res.status(409).json({ message: "Email já registado." });
      }

      // 3. Guardar na base de dados local
      const entry = await storage.createWaitlistEntry(data);

      // 4. Enviar para o Brevo (Adicionar à Lista #5)
      if (process.env.BREVO_API_KEY) {
        try {
          console.log("A enviar contacto para o Brevo...");
          
          const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json',
              'api-key': process.env.BREVO_API_KEY
            },
            body: JSON.stringify({
              email: data.email,
              listIds: [5], // ID da lista Waitlist POPS
              updateEnabled: true,
              attributes: {
                NOME: data.name,
                TELEFONE: data.phone
              }
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro Brevo API:", errorData);
          } else {
            console.log("Sucesso: Contacto adicionado ao Brevo.");
          }

        } catch (e) {
          console.error("Falha ao conectar com o Brevo:", e);
        }
      } else {
        console.warn("AVISO: BREVO_API_KEY não encontrada nas variáveis de ambiente.");
      }

      // 5. Responder com sucesso ao Website (Apenas uma vez!)
      res.status(201).json(entry);

    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos", details: error.errors });
      }
      res.status(500).json({ message: "Erro no servidor", error: error.message });
    }
  });
}