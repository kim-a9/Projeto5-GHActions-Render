import { Request, Response } from 'express';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';
import { GetBookByID } from '../../core/usecases/GetBookByID';

export class GetBookByIdController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const bookRepo = new MongoBookRepository();

        const getBook = new GetBookByID(bookRepo);
        try {
            const book = await getBook.execute(id);
            return res.status(200).json(book);
        } catch (e) {
            return res.status(400).json({ error: e });
        } 
    };
};
