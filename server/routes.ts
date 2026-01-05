import type { Express } from "express";
import { registerWaitlistRoutes } from "./api/waitlist";
import { registerCmsRoutes } from "./api/cms";
import { registerAnalyticsRoutes } from "./api/analytics";

export function registerRoutes(app: Express) {
  app.get("/api/ping", (_req, res) => {
    res.json({ status: "alive" });
  });

  registerWaitlistRoutes(app);
  registerCmsRoutes(app);
  registerAnalyticsRoutes(app);
}

