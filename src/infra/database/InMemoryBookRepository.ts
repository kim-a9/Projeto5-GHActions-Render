import { Book } from '../../core/entities/Book';
import { BookRepository } from '../../core/repositories/BookRepository';

export class InMemoryBookRepository implements BookRepository {
  public books: Book[] = [];

  async createBook(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

//   async findByEmail(email: string): Promise<User | null> {
//     const user = this.users.find((u) => u.email === email);
//     return user || null; 
//   }

  async getById(id: string): Promise<Book | null> {
    const book = this.books.find((b) => b.id === id);
    return book || null;
  }

  // async update(user: Book): Promise<void> {
  //   const index = this.books.findIndex((b) => b.id === book.id)
  //     if(index !== -1){
  //       this.books[index] = book
  //     }

  // }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter((b) => b.id !== id);
    
  }
}