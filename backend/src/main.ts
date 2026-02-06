import app from './infra/server/server';
import { config } from '../src/config/environment';
import cors from 'cors';

const PORT = config.port;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

