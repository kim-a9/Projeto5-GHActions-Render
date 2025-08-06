import app from './infra/server/server';
import { config } from '../src/config/environment';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

