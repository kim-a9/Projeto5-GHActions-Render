import express from 'express';
import { bookRoutes } from '../../app/routes/BookRoutes';
import { connectToMongo } from '../../infra/database/MongoConnection';

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 3000; 
const URI = process.env.MONGO_URL;

if(!URI) {
  throw new Error('Erro ao conectar ao banco de dados');
};
connectToMongo(URI); 

app.use('/books', bookRoutes); 

app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

export default app;