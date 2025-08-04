import { Book } from '../entities/Book';
// import { MongoBookRepository } from '../../infra/database/MongoBookRepository';
import { BookRepository } from '../repositories/BookRepository';



export class GetBookByID{
    constructor(private bookRepository: BookRepository) {}

    async execute(id: string): Promise<Book | null> {

        const bookFound = await this.bookRepository.getById(id);

        if(!bookFound) {
            throw new Error('Livro não encontrado');
        }
        return bookFound;
    }

    
}