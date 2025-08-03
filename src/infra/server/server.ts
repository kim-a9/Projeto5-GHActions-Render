import express from 'express';
import { bookRoutes } from '../../app/routes/BookRoutes';
import { connectToMongo } from '../../infra/database/MongoConnection';

const app = express();
app.use(express.json()); 

app.use('/books', bookRoutes); 

const PORT = process.env.PORT; 
const URI = process.env.MONGO_URL;

if(!URI) {
    throw new Error('Erro ao conectar ao banco de dados');
};


connectToMongo(URI); 

export default app;