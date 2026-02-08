import express from 'express';
import cors from 'cors';
import  { config }  from '../../config/environment';
import { bookRoutes } from '../../app/routes/BookRoutes';
import { connectToMongo } from '../../infra/database/MongoConnection';

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://projeto5-gh-actions-render.vercel.app/', 'http://localhost:5173'], 
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

app.use(bookRoutes); 

const URI = config.mongoUrl;

if(!URI) {
  throw new Error('Erro ao conectar ao banco de dados');
};
connectToMongo(URI); 



export default app;