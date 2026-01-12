import express, { type Request, Response, NextFunction } from "express";
import { log } from "./log"; // Agora encontra o log.ts na mesma pasta
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
// MUDANÇA AQUI: Agora usamos "./" porque o ficheiro está ao lado!
import { registerRoutes } from "./routes"; 

const app = express();

// Security Headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google-analytics.com", "https://ssl.google-analytics.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "data:", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://popshomecare.vercel.app", "https://www.popshomecare.pt"],
      connectSrc: ["'self'", "https://api.emailjs.com", "https://api.brevo.com"],
    },
  },
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", limiter);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rota de teste simples
app.get("/api/ping", (_req, res) => {
  res.json({ status: "online", timestamp: new Date().toISOString() });
});

// Registar as rotas
registerRoutes(app);
log("Routes registered synchronously");

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ message: "Internal Server Error", details: err.message });
});

// Lógica local para desenvolvimento
if (!process.env.VERCEL) {
  const startLocal = async () => {
    try {
      const { createServer } = await import("http");
      const server = createServer(app);
      if (process.env.NODE_ENV !== "production") {
         try {
             // Agora o vite.ts também deve estar na pasta api, por isso usamos "./"
             const { setupVite } = await import("./vite");
             await setupVite(server, app);
         } catch (e) { console.log("Vite setup skipped"); }
      }
      const PORT = Number(process.env.PORT) || 5001;
      server.listen(PORT, "0.0.0.0", () => log(`serving on port ${PORT}`));
    } catch (e) {
      console.error("Local server start failed:", e);
    }
  };
  startLocal();
}

export default app;