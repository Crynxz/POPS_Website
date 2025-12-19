export default async (req: any, res: any) => {
  if (req.url.endsWith("/health")) {
    return res.status(200).json({ status: "alive", bridge: true });
  }

  try {
    // Importação limpa do servidor Express
    const { default: app } = await import("../server/index");
    return app(req, res);
  } catch (err: any) {
    console.error("Vercel Function Error:", err);
    return res.status(500).json({ 
      error: "FUNCTION_INVOCATION_ERROR", 
      message: err.message,
      stack: err.stack 
    });
  }
};
