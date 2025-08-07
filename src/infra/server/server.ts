import express from 'express';
import  { config }  from '../../config/environment';
import { bookRoutes } from '../../app/routes/BookRoutes';
import { connectToMongo } from '../../infra/database/MongoConnection';

const app = express();

app.use(express.json());

 const URI = config.mongoUrl;

if(!URI) {
  throw new Error('Erro ao conectar ao banco de dados');
};
connectToMongo(URI); 

app.use('/', bookRoutes); 



export default app