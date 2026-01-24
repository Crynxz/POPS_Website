import express, { type Request, Response, NextFunction } from "express";
console.log(`DEBUG: api/index.ts is starting... NODE_ENV=${process.env.NODE_ENV}`);
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
const isProduction = process.env.NODE_ENV === "production";
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      upgradeInsecureRequests: isProduction ? [] : null,
      scriptSrc: [
        "'self'", 
        "'unsafe-inline'", 
        "https://www.google-analytics.com", 
        "https://ssl.google-analytics.com",
        "https://www.googletagmanager.com"
      ],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "data:", "https://fonts.gstatic.com"],
      imgSrc: [
        "'self'", 
        "data:", 
        "https://popshomecare.vercel.app", 
        "https://www.popshomecare.pt",
        "https://www.google-analytics.com",
        "https://www.googletagmanager.com"
      ],
      connectSrc: [
        "'self'", 
        "https://api.emailjs.com", 
        "https://api.brevo.com",
        "https://www.google-analytics.com",
        "https://analytics.google.com",
        "https://www.googletagmanager.com"
      ],
    },
  },
  strictTransportSecurity: isProduction ? {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  } : false, 
  referrerPolicy: {
    policy: "strict-origin-when-cross-origin",
  },
}));

// Secure Session & Cookies
app.use(session({
  cookie: {
    secure: isProduction,
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
if (isProduction && !process.env.VERCEL) {
  serveStatic(app);
}

// Lógica local para desenvolvimento
if (!process.env.VERCEL) {
  const startLocal = async () => {
    try {
      log("Entering startLocal...");
      const PORT = Number(process.env.PORT) || 5002;
      let server;

      // Enable HTTP/2 if SSL certificates are provided
      if (process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH) {
        const http2 = await import("http2");
        const fs = await import("fs");
        log("Starting server with HTTP/2 support");
        server = http2.createSecureServer({
          key: fs.readFileSync(process.env.SSL_KEY_PATH),
          cert: fs.readFileSync(process.env.SSL_CERT_PATH),
          allowHTTP1: true // Fallback for clients that don't support HTTP/2
        }, app as any);
      } else {
        const { createServer } = await import("http");
        server = createServer(app);
        log("HTTP server created");
      }

      if (!isProduction) {
         try {
             log("Importing vite.js...");
             const { setupVite } = await import("./vite.js");
             log("Calling setupVite...");
             await setupVite(server as any, app);
         } catch (e) { 
             log(`Vite setup skipped or failed: ${e}`); 
             console.error(e);
         }
      }
      
      server.listen(PORT, "0.0.0.0", () => {
        const protocol = (process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH) ? "https (HTTP/2)" : "http";
        log(`serving on port ${PORT} using ${protocol}`);
      });
    } catch (e) {
      console.error("Local server start failed:", e);
    }
  };
  startLocal();
}

export default app;