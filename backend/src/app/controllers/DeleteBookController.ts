import { Request, Response } from 'express';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';
import { DeleteBook } from '../../core/usecases/DeleteBook';

export class DeleteBookController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { _id } = req.params;

        try {
            const delBook = new DeleteBook(new MongoBookRepository());
            await delBook.execute(_id);
            return res.status(200).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }


    }

}