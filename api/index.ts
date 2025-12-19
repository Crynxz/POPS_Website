import app from "../server/index";

export default (req: any, res: any) => {
  // Teste de vida que ignora o Express para debug
  if (req.url === "/api/health") {
    return res.status(200).json({ status: "ok", bridge: true });
  }
  return app(req, res);
};
