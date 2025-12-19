import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

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

(async () => {
  const server = await registerRoutes(app);

  // Global Error Handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // Em produção no Vercel, o Vercel serve os ficheiros estáticos automaticamente
  // através da configuração no vercel.json (outputDirectory: dist/public).
  // Por isso, só configuramos o Vite/Static se NÃO estivermos no Vercel ou se for dev.
  if (app.get("env") === "development") {
    await setupVite(server, app);
  } else if (!process.env.VERCEL) {
    serveStatic(app);
  }

  // SÓ inicia o listener se NÃO estiver no Vercel
  if (!process.env.VERCEL) {
    const PORT = 5000;
    server.listen(PORT, "0.0.0.0", () => {
      log(`serving on port ${PORT}`);
    });
  }
})();

export default app;