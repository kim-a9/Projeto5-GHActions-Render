import { DeleteBook } from '../../core/usecases/DeleteBook';
import { Book } from '../../core/entities/Book';
import { InMemoryBookRepository } from '../../infra/database/InMemoryBookRepository';

describe('DeleteBook', () => {
    let bookRepo: InMemoryBookRepository;
    let deleteBook: DeleteBook;

    beforeEach(() => {
        bookRepo = new InMemoryBookRepository();
        deleteBook = new DeleteBook(bookRepo);
    });

     it('deve apagar um livro com sucesso', async () => {
        const book = new Book(
            'Título do livro',
            'Autor(a) do livro',
            'Genero literário'
        )
        await bookRepo.createBook(book);

        await deleteBook.execute(book.id as string);

        const dltBook = await bookRepo.getById(book.id!);

        expect(dltBook).toBeNull();

    });

    it('deve retornar erro caso o usuario seja inexistente', async () => {
        const book = new Book(
            'Título do livro',
            'Autor(a) do livro',
            'Genero literário'
        )
        await bookRepo.createBook(book);

        await expect(deleteBook.execute('012')).rejects.toThrow('Não foi possível localizar o livro');

    });


});