import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { log } from "./log";
import { createServer } from "http";

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

// Regista as rotas IMEDIATAMENTE (Síncrono)
registerRoutes(app);

// Tratamento de Erros Global
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Lógica de servidor local (Não corre no Vercel)
if (!process.env.VERCEL) {
  const server = createServer(app);
  if (app.get("env") === "development") {
    (async () => {
      const { setupVite } = await import("./vite");
      await setupVite(server, app);
      const PORT = Number(process.env.PORT) || 5000;
      server.listen(PORT, "0.0.0.0", () => log(`serving on port ${PORT}`));
    })();
  } else {
    (async () => {
      const { serveStatic } = await import("./vite");
      serveStatic(app);
      const PORT = Number(process.env.PORT) || 5000;
      server.listen(PORT, "0.0.0.0", () => log(`serving on port ${PORT}`));
    })();
  }
}

export default app;
