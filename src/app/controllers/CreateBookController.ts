import { Request,  Response } from 'express';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';
import { CreateBook } from '../../core/usecases/CreateBook';
import { Book } from '../../core/entities/Book';

export class CreateBookController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { title, author, genre } = req.body;


        const book = new Book(title, author, genre);

        const bookRepo = new MongoBookRepository();
        const createBook = new CreateBook(bookRepo);

        try {
            // const createBook = new CreateBook(bookRepository);
            await createBook.execute(book);
            return res.status(201).json(book);
        } catch (e: any) {
            return res.status(400).json({ error: e })
        }

    }

};