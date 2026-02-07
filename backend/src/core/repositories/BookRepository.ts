import { Book } from '../entities/Book';

export interface BookRepository {
    createBook(book: Book): Promise<Book>;
    getById(id: string): Promise<Book | null>;
    updateBook(book: Book): Promise<Book | null>;
    delete(id: string): Promise<void>;
    getAll(): Promise<Book[] | null>;
}