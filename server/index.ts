import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { log } from "./log";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware de Logs
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

// Rota de teste direto no index
app.get("/api/test-direct", (_req, res) => {
  res.json({ ok: true, source: "server/index.ts" });
});

// Regista as rotas
registerRoutes(app);

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ message: "Internal Error", details: err.message });
});

// Lógica local
if (!process.env.VERCEL) {
  (async () => {
    const { createServer } = await import("http");
    const server = createServer(app);
    if (app.get("env") === "development") {
      const { setupVite } = await import("./vite");
      await setupVite(server, app);
    } else {
      const { serveStatic } = await import("./vite");
      serveStatic(app);
    }
    const PORT = Number(process.env.PORT) || 5000;
    server.listen(PORT, "0.0.0.0", () => log(`serving on port ${PORT}`));
  })();
}

export default app;