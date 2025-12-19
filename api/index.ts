import app from "../server/index";

export default (req: any, res: any) => {
  // Se o pedido for para health, respondemos sem tocar em mais nada
  if (req.url.endsWith("/health")) {
    return res.status(200).json({ status: "ok" });
  }
  return app(req, res);
};
