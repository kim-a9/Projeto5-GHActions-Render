import { Book } from '../entities/Book';
// import { MongoBookRepository } from '../../infra/database/MongoBookRepository';
import { BookRepository } from '../repositories/BookRepository';



export class GetAllBooks{
    constructor(private bookRepository: BookRepository) {}

    async execute(): Promise<Book[] | null> {

        const allBooks = await this.bookRepository.getAll();

        if(!allBooks) {
            throw new Error('Não há livros registrados');
        }
        return allBooks;
    }

    
}