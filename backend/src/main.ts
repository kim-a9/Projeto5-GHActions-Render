import app from './infra/server/server';
import { config } from '../src/config/environment';
import cors from 'cors';

const PORT = config.port;

app.use(cors({
  origin: ['https://projeto5-gh-actions-render.vercel.app/', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

