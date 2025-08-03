import { Book } from '../../core/entities/Book';
import { BookRepository } from '../../core/repositories/BookRepository';
import { BookModel } from '../database/MongooseBookModel';

export class MongoBookRepository implements BookRepository {
    private toEntity(doc: any): Book{
        return new Book(doc.title, doc.author, doc.genre, doc.id); //.toString()
        }
        
        async createBook(book: Book): Promise<Book>{
            const doc = await BookModel.create(book);
            return this.toEntity(doc);
        };

        // async getAll(): Promise<Book[]> {
        //     const books = await BookModel.find();
        //     return books.map((doc) => this.toEntity(doc));
        // };
        
        async getById(id: string): Promise<Book | null> {
            const doc = await BookModel.findOne({ _id: id });

            return doc ? this.toEntity(doc): null;
        };

        // async updateBook(book: Book): Promise<Book | null>{
        //     const doc = await BookModel.findByIdAndUpdate(
        //         book.id, 
        //         { 
        //             title: book.title,
        //             author: book.author,
        //             genre: book.genre
        //         },
        //         { new: true }
        //     );
        //     return doc ? this.toEntity(doc): null;

        // };

        // async delete(id: string): Promise<void> {
        //     const doc = await BookModel.findByIdAndDelete({ _id: id });
            
        // };

}