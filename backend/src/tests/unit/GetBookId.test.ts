import { CreateBook } from '../../core/usecases/CreateBook';
import { GetBookByID } from '../../core/usecases/GetBookByID';
import { Book } from '../../core/entities/Book';
import { InMemoryBookRepository } from '../../infra/database/InMemoryBookRepository';

describe('GetBookByID', () => {
    let bookRepo: InMemoryBookRepository;
    let getBookByID: GetBookByID;
    let createBook: CreateBook;

    beforeEach(() => {
        bookRepo = new InMemoryBookRepository();
        getBookByID = new GetBookByID(bookRepo);
        createBook = new CreateBook(bookRepo);
    });

    it('deve verificar se o livro possui um id', async () => {
        const bookData = new Book(
            'Torto Arado', 
            'Itamar Vieira Junior',
            'Romance'
        );
    const book = await createBook.execute(bookData);
    
    const idFound = await getBookByID.execute(book.id!);

    expect(idFound).not.toBeNull();
    });

    it('deve retornar um erro caso não encontre o id', async () => {

        await expect(getBookByID.execute('98')).rejects.toThrow('Livro não encontrado');

    });

});