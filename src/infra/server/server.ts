import express from 'express';
import { bookRoutes } from '../../app/routes/BookRoutes';
import { connectMongo } from '../../infra/database/MongoConnection';

const app = express();
app.use(express.json()); 

const url = process.env.MONGO_URL;

app.use('/books', bookRoutes); 

connectMongo();

export default app;