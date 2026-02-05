import express from 'express';
import cors from 'cors';
import  { config }  from '../../config/environment';
import { bookRoutes } from '../../app/routes/BookRoutes';
import { connectToMongo } from '../../infra/database/MongoConnection';

const app = express();
app.use(express.json());
app.use(cors());

app.use(bookRoutes); 

// const PORT = config.port;
const URI = config.mongoUrl;

if(!URI) {
  throw new Error('Erro ao conectar ao banco de dados');
};
connectToMongo(URI); 


// app.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });


export default app;