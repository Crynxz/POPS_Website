ISTO_TEM_DE_DAR_ERRO_FATAL_AGORA!!!!
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

      console.log(">>> BASE DE DADOS FUNCIONOU! <<<");
      console.log("TEMOS CHAVE API?", process.env.BREVO_API_KEY ? "SIM" : "NÃO");
      console.log("CHAVE PRIMEIROS 10 CARACTERES:", process.env.BREVO_API_KEY?.substring(0, 10)); // Debug log
      console.log("Starting Brevo integration for:", data.email);

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
              listIds: [5],
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

          const responseData = await response.json();

          if (!response.ok) {
            console.error("Erro Brevo API ao adicionar contacto:", responseData);
          } else {
            console.log("✓ Contacto adicionado ao Brevo com sucesso");
          }

          // Send confirmation email
          console.log("A enviar email de confirmação para:", data.email);
          
          const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'api-key': process.env.BREVO_API_KEY,
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              to: [{ email: data.email, name: data.name }],
              from: { 
                email: 'geral@popshomecare.pt',
                name: 'POPS Home Care'
              },
              subject: 'Bem-vindo à POPS - Confirme sua inscrição',
              htmlContent: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2>Obrigado por se inscrever na POPS!</h2>
                  <p>Olá ${data.name},</p>
                  <p>Recebemos sua inscrição na nossa lista de espera. Em breve, você receberá mais informações sobre os nossos serviços de cuidados domiciliares.</p>
                  <p>Estamos entusiasmados em poder ajudá-lo!</p>
                  <br>
                  <p>Atenciosamente,<br><strong>Equipe POPS</strong></p>
                </div>
              `
            })
          });

          const emailData = await emailResponse.json();
          if (!emailResponse.ok) {
            console.error("✗ Erro ao enviar email:", emailData);
          } else {
            console.log("✓ Email de confirmação enviado com sucesso para:", data.email);
          }

        } catch (e) {
          console.error("✗ Falha ao conectar com o Brevo:", e);
        }
      } else {
        console.warn("✗ BREVO_API_KEY não encontrada nas variáveis de ambiente");
      }

      // 5. RESPONDER COM SUCESSO AO CLIENT (DEPOIS de todas as operações!)
      res.status(201).json({ success: true, entry });

    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos", details: error.errors });
      }
      res.status(500).json({ message: "Erro no servidor", error: error.message });
    }
  });
}