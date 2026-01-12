// api/index.ts (na raiz)

// Importamos a aplicação "verdadeira" que está na pasta server
import app from '../server/index';

// Dizemos à Vercel: "Usa aquela app ali!"
export default app;