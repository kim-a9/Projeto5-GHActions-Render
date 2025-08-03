import { Book } from '../entities/Book';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';


export class GetBookByID{
    constructor(private bookRepository: MongoBookRepository) {}

    async execute(id: string): Promise<Book | undefined> {

        const bookFound = await this.bookRepository.getById(id);

        if(!bookFound) {
            throw new Error('Livro não encontrado');
        }
        return bookFound;
    }

    
}