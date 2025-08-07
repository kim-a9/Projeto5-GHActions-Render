import app from './infra/server/server';
import { config } from '../src/config/environment';

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

