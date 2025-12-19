import express from 'express';
// Make sure this path points to your new routes file
import { registerRoutes } from '../server/routes'; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

registerRoutes(app);

export default app;