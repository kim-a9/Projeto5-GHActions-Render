import { Book } from '../../core/entities/Book';
import { CreateBook } from '../../core/usecases/CreateBook';
import { UpdateBook } from '../../core/usecases/UpdateBook';
import { InMemoryBookRepository } from '../../infra/database/InMemoryBookRepository';

describe('UpdateBook', () => {
    let bookRepo: InMemoryBookRepository;
    let updateBook: UpdateBook;
    let createBook: CreateBook;

    beforeEach(() => {
        bookRepo = new InMemoryBookRepository();
        updateBook = new UpdateBook(bookRepo);
        createBook = new CreateBook(bookRepo);
    });

     it('deve atualizar um livro existente', async () => {
        const book = await createBook.execute({
            title: 'Torto Arado', 
            author: 'Itamar Vieira Junior',
            genre: 'Romance'
        });

        const newBook = await updateBook.execute(book.id!, {
            title: 'Torto Arado', 
            author: 'Itamar Vieira Junior',
            genre: 'Romance'
        });

        expect(newBook.title).toBe('Torto Arado');
        expect(newBook.author).toBe('Itamar Vieira Junior');
        expect(newBook.genre).toBe('Romance');
       
    });

      it('deve retornar erro caso o id seja inexistente', async () => {
        await expect(
            updateBook.execute('012', {
                title: 'Torto Arado', 
                author: 'Itamar Vieira Junior',
                genre: 'Romance'
            })
        ).rejects.toThrow('Não foi possível localizar o livro');
    });











});