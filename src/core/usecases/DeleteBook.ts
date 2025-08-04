import { Book } from '../entities/Book';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';


export class DeleteBook{
    constructor(private bookRepository: MongoBookRepository) {}

    async execute(id: string): Promise<void> {
        const delBook = await this.bookRepository.getById(id);
        if(!delBook) {
            throw new Error('Não foi possível localizar o livro');
        }
        await this.bookRepository.delete(id); 

    }

}