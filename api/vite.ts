import express, { type Express } from "express";
import { type Server } from "http";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";
import { log } from "./log";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function setupVite(server: Server, app: Express) {
  log("Setting up Vite...");
  // Importações dinâmicas para evitar erros em produção
  const { createServer: createViteServer, createLogger } = await import("vite");
  log("Imported vite functions");

  // FIX: Robust import logic. Node ESM requires file extensions.
  // We try .ts first (for development), then fallback to .js
  let viteConfigModule;
  try {
    log("Attempting to import vite.config.ts...");
    viteConfigModule = await import("../vite.config.ts");
  } catch (e) {
    log("vite.config.ts import failed, trying vite.config.js...");
    try {
      viteConfigModule = await import("../vite.config.js");
    } catch (e2) {
      log("CRITICAL ERROR: Could not load vite.config.ts or vite.config.js");
      throw e2;
    }
  }
  
  log("Imported vite config module");
  let viteConfig = viteConfigModule.default as any;
  
  if (typeof viteConfig === 'function') {
    log("Vite config is a function, calling it...");
    viteConfig = await viteConfig({ command: 'serve', mode: 'development' });
  }
  
  const viteLogger = createLogger();

  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  log("Creating Vite server...");
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
      },
    },
    server: serverOptions,
    appType: "custom",
  });
  log("Vite server created");

  app.use(vite.middlewares);
  log("Vite middlewares added");

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    log(`Handling request for: ${url}`);

    try {
      const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      // log("Read client template"); 
      
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      
      // log("Calling vite.transformIndexHtml...");
      const page = await vite.transformIndexHtml(url, template);
      // log("vite.transformIndexHtml finished");
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      log(`Error handling request: ${e}`);
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  log(`Serving static files from: ${distPath}`);

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}