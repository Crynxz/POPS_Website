import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { log } from "./log";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware de Logs (apenas para API)
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    const start = Date.now();
    res.on("finish", () => {
      const duration = Date.now() - start;
      log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
    });
  }
  next();
});

// Regista as rotas
registerRoutes(app);

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ 
    message: "Internal Error", 
    details: err.message || "Unknown error"
  });
});

// Lógica de servidor local (Não corre no Vercel)
if (!process.env.VERCEL) {
  const startLocal = async () => {
    try {
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
    } catch (e) {
      console.error("Local startup failed:", e);
    }
  };
  startLocal();
}

export default app;
