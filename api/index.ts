import express, { type Request, Response, NextFunction } from "express";
import { log } from "./log.js"; 
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import session from "express-session";
import createMemoryStore from "memorystore";
import { registerRoutes } from "./routes.js"; 
import { serveStatic } from "./static.js";

const MemoryStore = createMemoryStore(session);
const app = express();

app.set("trust proxy", 1);

// Security Headers & HSTS
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      upgradeInsecureRequests: [],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google-analytics.com", "https://ssl.google-analytics.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "data:", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://popshomecare.vercel.app", "https://www.popshomecare.pt"],
      connectSrc: ["'self'", "https://api.emailjs.com", "https://api.brevo.com"],
    },
  },
  strictTransportSecurity: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true,
  },
  referrerPolicy: {
    policy: "strict-origin-when-cross-origin",
  },
}));

// Secure Session & Cookies
app.use(session({
  cookie: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    httpOnly: true,
    maxAge: 86400000, // 1 day
  },
  store: new MemoryStore({
    checkPeriod: 86400000, // prune expired entries every 24h
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || "default_secret_change_me",
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

// Production Static Serving (for non-Vercel environments)
if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
  serveStatic(app);
}

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