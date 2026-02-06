import { Request, Response } from 'express';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';
import { GetAllBooks } from '../../core/usecases/GetAllBook';

export class GetAllBooksController{
    async handle(req: Request, res: Response): Promise<Response> {

        const bookRepo = new MongoBookRepository();

        const getAll = new GetAllBooks(bookRepo);

        try {
            const book = await getAll.execute();
            return res.status(200).json(book);
        } catch (e: any) {
            return res.status(400).json({ error: e.message });
        } 
    };
};
