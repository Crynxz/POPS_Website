import type { Express, Request, Response } from "express";
import { storage } from "../storage.js";
import { insertWaitlistSchema } from "../../shared/schema.js";
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
      console.log(`✅ Novo registo DB: ${data.email} (ID: ${entry.id})`);

      // 4. Enviar para o Brevo (Adicionar à Lista #5 -> Dispara Automação)
      if (process.env.BREVO_API_KEY) {
        try {
          const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json',
              'api-key': process.env.BREVO_API_KEY
            },
            body: JSON.stringify({
              email: data.email,
              listIds: [5], // O gatilho da tua automação
              updateEnabled: true,
              attributes: {
                NOME: data.name,
                TELEFONE: data.phone,
                DATA_NASCIMENTO: data.birthDate,
                LOCALIDADE: data.location,
                PERFIL: data.profile,
                INTERESSE: data.interest
              }
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error("❌ Erro Brevo:", JSON.stringify(errorData));
          } else {
            console.log("✅ Brevo: Contacto adicionado e automação iniciada.");
          }

        } catch (e) {
          console.error("❌ Falha na conexão Brevo:", e);
        }
      }

      // 5. Responder com sucesso
      res.status(201).json({ success: true, entry });

    } catch (error: any) {
      console.error("Erro no registo:", error);

      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos", details: error.errors });
      }
      res.status(500).json({ message: "Erro no servidor" });
    }
  });
}