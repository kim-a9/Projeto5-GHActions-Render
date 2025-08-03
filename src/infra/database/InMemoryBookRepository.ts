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

//   async update(user: User): Promise<void> {
//     const index = this.users.findIndex((u) => u.id === user.id)
//       if(index !== -1){
//         this.users[index] = user
//       }

//   }

//   async delete(id: string): Promise<void> {
//     this.users = this.users.filter((user) => user.id !== id);
    
//   }
}