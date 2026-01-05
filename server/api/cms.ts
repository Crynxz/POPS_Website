import type { Express, Request, Response } from "express";
import { storage } from "../storage";
import { insertCmsContentSchema } from "../../shared/schema";
import { ZodError } from "zod";

export function registerCmsRoutes(app: Express) {
  // List all content
  app.get("/api/cms", async (_req: Request, res: Response) => {
    try {
      const content = await storage.listCmsContent();
      res.json(content);
    } catch (error: any) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

  // Get content by slug
  app.get("/api/cms/:slug", async (req: Request, res: Response) => {

    try {
      const slug = req.params.slug;
      const content = await storage.getCmsContent(slug);
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }
      res.json(content);
    } catch (error: any) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

  // Update content (UPSERT)
  // TODO: Add authentication middleware here
  app.put("/api/cms", async (req: Request, res: Response) => {
    try {
      const data = insertCmsContentSchema.parse(req.body);
      const content = await storage.updateCmsContent(data);
      res.json(content);
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid data", details: error.errors });
      }
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
}
