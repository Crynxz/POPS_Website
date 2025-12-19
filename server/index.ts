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

// Create server and register routes immediately

(async () => {

  const server = await registerRoutes(app);



  // Global Error Handler

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {

    const status = err.status || err.statusCode || 500;

    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });

  });



  // Setup environment-specific logic

  if (process.env.NODE_ENV !== "production") {

    const { setupVite } = await import("./vite");

    await setupVite(server, app);

    const PORT = 5000;

    server.listen(PORT, "0.0.0.0", () => {

      log(`serving on port ${PORT}`);

    });

  } else {

    // In production (non-Vercel), we need to serve static files and listen

    if (!process.env.VERCEL) {

      const { serveStatic } = await import("./vite");

      serveStatic(app);

      const PORT = 5000;

      server.listen(PORT, "0.0.0.0", () => {

        log(`serving on port ${PORT}`);

      });

    }

  }

})();



export default app;
