import express, { type Request, Response, NextFunction } from "express";
import { log } from "./log";
import compression from "compression";

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rota de teste absoluto (não depende de nenhum outro ficheiro)
app.get("/api/ping", (_req, res) => {
  res.json({ 
    status: "online", 
    message: "Express is running",
    timestamp: new Date().toISOString()
  });
});

// Inicialização segura e tardia das rotas e lógica
const init = async () => {
  try {
    const { registerRoutes } = await import("./routes");
    registerRoutes(app);
    log("Routes registered successfully");
  } catch (err: any) {
    console.error("Failed to register routes:", err);
  }

  // Error handling
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    res.status(status).json({ 
      message: "Internal Server Error", 
      details: err.message 
    });
  });

  // Lógica local (Ignorada no Vercel)
  if (!process.env.VERCEL) {
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
      const PORT = Number(process.env.PORT) || 5001;
      server.listen(PORT, "0.0.0.0", () => log(`serving on port ${PORT}`));
    } catch (e) {
      console.error("Local server start failed:", e);
    }
  }
};

// Inicia o processo de configuração mas exporta o app imediatamente
init();

export default app;