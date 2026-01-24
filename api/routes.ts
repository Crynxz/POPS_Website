import type { Express } from "express";
import { registerWaitlistRoutes } from "./api/waitlist.js";
import { registerCmsRoutes } from "./api/cms.js";
import { registerAnalyticsRoutes } from "./api/analytics.js";
import { registerContactRoutes } from "./api/contact.js";

export function registerRoutes(app: Express) {
  app.get("/api/ping", (_req, res) => {
    res.json({ status: "alive" });
  });

  // Test Brevo API connectivity
  app.get("/api/brevo-test", async (_req, res) => {
    if (!process.env.BREVO_API_KEY) {
      return res.status(400).json({ error: "BREVO_API_KEY not found in environment" });
    }

    try {
      const response = await fetch('https://api.brevo.com/v3/account', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY
        }
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({ 
          error: "Brevo API error",
          details: data 
        });
      }

      res.json({ 
        status: "success",
        message: "Connected to Brevo",
        account: data
      });
    } catch (e) {
      res.status(500).json({ 
        error: "Failed to connect to Brevo",
        details: String(e)
      });
    }
  });

  registerWaitlistRoutes(app);
  registerCmsRoutes(app);
  registerAnalyticsRoutes(app);
  registerContactRoutes(app);
}

