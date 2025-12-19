export default async (req: any, res: any) => {
  // Rota de diagnóstico ultra-rápida
  if (req.url.endsWith("/health")) {
    return res.status(200).json({ 
      status: "alive", 
      config: {
        hasDbUrl: !!process.env.DATABASE_URL,
        hasResendKey: !!process.env.RESEND_API_KEY,
        nodeEnv: process.env.NODE_ENV
      }
    });
  }

  try {
    const { default: app } = await import("../server/index");
    return app(req, res);
  } catch (err: any) {
    console.error("Vercel Bridge Failure Details:");
    console.error("Name:", err.name);
    console.error("Message:", err.message);
    console.error("Stack:", err.stack);
    return res.status(500).json({ 
      error: "SERVER_BOOT_ERROR", 
      message: err.message,
      hint: "Check environment variables and build logs."
    });
  }
};