import type { Express } from "express";
import { storage } from "../storage.js";

export function registerCmsRoutes(app: Express) {
  app.get("/api/cms/:slug", async (req, res) => {
    try {
      const slug = req.params.slug;
      
      const content = await storage.getCmsContent(slug);

      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }

      res.json(content);
    } catch (error) {
      console.error(`Error fetching CMS content for slug ${req.params.slug}:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  console.log("CMS routes initialized");
}