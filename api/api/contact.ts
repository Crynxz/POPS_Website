import type { Express, Request, Response } from "express";
import { contactFormSchema } from "../../shared/schema.js";
import { ZodError } from "zod";

export function registerContactRoutes(app: Express) {
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // 1. Validar dados recebidos
      const data = contactFormSchema.parse(req.body);

      // 2. Enviar email via Brevo (SMTP Transacional)
      if (process.env.BREVO_API_KEY) {
        try {
          const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json',
              'api-key': process.env.BREVO_API_KEY
            },
            body: JSON.stringify({
              sender: { name: "POPS Website Notificações", email: "suporte@popshomecare.pt" },
              replyTo: { email: data.email, name: data.name },
              to: [{ email: "suporte@popshomecare.pt", name: "Suporte POPS" }],
              subject: `Novo Contacto: ${data.subject}`,
              textContent: `Nova mensagem de contacto de ${data.name} (${data.email}). Assunto: ${data.subject}. Mensagem: ${data.message}`,
              htmlContent: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <style>
                      body { font-family: sans-serif; line-height: 1.6; color: #333; }
                      .container { padding: 20px; border: 1px solid #eee; border-radius: 10px; }
                      .header { border-bottom: 2px solid #0E6973; padding-bottom: 10px; margin-bottom: 20px; }
                      .label { font-weight: bold; color: #0E6973; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <div class="header">
                        <h2>Formulário de Contacto - Website</h2>
                      </div>
                      <p><span class="label">Nome:</span> ${data.name}</p>
                      <p><span class="label">Email:</span> ${data.email}</p>
                      <p><span class="label">Assunto:</span> ${data.subject}</p>
                      <hr />
                      <p><span class="label">Mensagem:</span></p>
                      <p style="white-space: pre-wrap;">${data.message}</p>
                    </div>
                  </body>
                </html>
              `
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error("❌ Erro Brevo SMTP:", JSON.stringify(errorData));
          } else {
            console.log(`✅ Email de contacto enviado de ${data.email}`);
          }

        } catch (e) {
          console.error("❌ Falha na conexão Brevo SMTP:", e);
        }
      } else {
        console.warn("⚠️ BREVO_API_KEY não configurada. Email não enviado.");
      }

      // 3. Responder com sucesso
      res.status(200).json({ success: true, message: "Mensagem enviada com sucesso." });

    } catch (error: any) {
      console.error("Erro no contacto:", error);

      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos", details: error.errors });
      }
      res.status(500).json({ message: "Erro no servidor" });
    }
  });
}
