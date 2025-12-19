import fs from "fs";
import path from "path";

export default async (req: any, res: any) => {
  // Teste de vida ultra-simples SEM dependências
  if (req.url.endsWith("/health")) {
    return res.status(200).json({ 
      status: "ok", 
      time: new Date().toISOString(),
      cwd: process.cwd(),
      files: fs.readdirSync(process.cwd())
    });
  }

  try {
    const { default: app } = await import("../server/index");
    return app(req, res);
  } catch (err: any) {
    console.error("Vercel Bridge Error:", err);
    return res.status(500).json({ 
      error: "Bridge Failure", 
      message: err.message,
      stack: err.stack
    });
  }
};
