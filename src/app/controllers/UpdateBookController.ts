import { Request, Response } from 'express';
import { bookRepository } from '../../infra/database/repositoryInstance';
import { UpdateBook } from '../../core/usecases/UpdateBook';

export class UpdateBookController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { title, author, genre } = req.body;

        if(!id){
            throw new Error('Não foi possível encontrar o livro');
        }

        try {
            const updateBook = await bookRepository.updateBook({id, title, author, genre})
            res.json(updateBook);

            return res.status(201).json('Livro atualizado com sucesso');

        } catch (error: any) {
            return res.status(400).json({ error: error.message});
        }

    }


}