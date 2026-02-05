import { BookRepository } from '../repositories/BookRepository';

interface IUpdateBook{
    _id?: string;
    title?: string;
    author?: string;
    genre?: string;
}

export class UpdateBook{
    constructor(private bookrepository: BookRepository) {}

    async execute(_id: string, data: IUpdateBook) {
        const bookFound = await this.bookrepository.getById(_id);

        if(!bookFound) {
            throw new Error('Não foi possível localizar o livro');
        }

        if(data.title) bookFound.title = data.title;
        if(data.author) bookFound.author = data.author;
        if(data.genre) bookFound.genre = data.genre;

        await this.bookrepository.updateBook(bookFound);
        return bookFound;

    };

};