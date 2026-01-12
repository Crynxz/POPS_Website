import type { Express, Request, Response } from "express";
import { storage } from "../storage";
import { insertAnalyticsEventSchema } from "../../shared/schema";
import { ZodError } from "zod";

export function registerAnalyticsRoutes(app: Express) {
  app.post("/api/analytics/event", async (req: Request, res: Response) => {
    try {
      const data = insertAnalyticsEventSchema.parse(req.body);
      const event = await storage.logAnalyticsEvent(data);
      res.status(201).json(event);
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid data", details: error.errors });
      }
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
}
