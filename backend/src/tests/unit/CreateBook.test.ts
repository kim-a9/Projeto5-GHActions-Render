import { CreateBook } from '../../core/usecases/CreateBook';
import { Book } from '../../core/entities/Book';
import { InMemoryBookRepository } from '../../infra/database/InMemoryBookRepository';

describe('CreateUser', () => {    
    let bookRepository: InMemoryBookRepository;
    let createBook: CreateBook;

    beforeEach(() => {
    bookRepository = new InMemoryBookRepository();
    createBook = new CreateBook(bookRepository);
    });
    it('deve criar um novo livro e guardar no repositorio com sucesso', async () => {
        const bookData = new Book(
            'Torto Arado', 
            'Itamar Vieira Junior',
            'Romance'
        );
        const book = await createBook.execute(bookData);

        expect(book).toBeInstanceOf(Book);
        expect(book.title).toBe(bookData.title);
        expect(book.author).toBe(bookData.author);
        expect(book.genre).toBe(bookData.genre);

    });


    it('deve criar um livro com pelo menos informações do título e autor', async () => {
        const emptyData = new Book('', '', 'Romance');
        if(!emptyData.title || !emptyData.author) {
            await expect(createBook.execute(emptyData))
            .rejects.toThrow('Insira um título para o livro.');
        };
    
        
        
    });

    // const bookData = new Book(
    //         'Torto Arado', 
    //         'Itamar Vieira Junior',
    //         'Romance'
    //     );
   
});