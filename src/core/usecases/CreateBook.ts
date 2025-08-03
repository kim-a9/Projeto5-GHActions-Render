import { Book } from '../entities/Book';
// import { BookRepository } from "../../core/repositories/BookRepository";
import { BookRepository } from '../repositories/BookRepository';


export interface ICreateBook{
    title: string;
    author: string;
    genre: string;
}

export class CreateBook {
    constructor(private bookRepo: BookRepository) {}

    async execute(data: ICreateBook): Promise<Book> {
        if (!data.title) {
            throw new Error('Insira um título para o livro.');
        }
        const book = new Book(
            data.title,
            data.author,
            data.genre
        );

        const bookCreated = await this.bookRepo.createBook(book);
        return bookCreated;
    }
}