import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { log } from "./log";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
    }
  });
  next();
});

// Create a configured app instance
const startApp = async () => {
  // Registo imediato de rotas
  registerRoutes(app);

  // Error handling
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // Local/Dev only logic
  if (!process.env.VERCEL) {
    if (app.get("env") === "development") {
      const { createServer } = await import("http");
      const { setupVite } = await import("./vite");
      const server = createServer(app);
      await setupVite(server, app);
      server.listen(5000, "0.0.0.0", () => log("serving on port 5000"));
    } else {
      const { serveStatic } = await import("./vite");
      serveStatic(app);
      app.listen(5000, "0.0.0.0", () => log("serving on port 5000"));
    }
  }
};

// Initialize
startApp();

export default app;
