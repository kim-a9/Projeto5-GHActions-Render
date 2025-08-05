// import request from 'supertest';
// import app from '../../infra/server/server';
// import mongoose from 'mongoose';
// import { BookModel } from '../../infra/database/MongooseBookModel';

// describe('GET /books/:id', () => {
//     let bookId: mongoose.Types.ObjectId;
//     let book: any;
//     // let bookId: string;

//     beforeAll(async () => {
//         await mongoose.createConnection(process.env.MONGO_URL_TEST!);
//     });
    
//     beforeEach(async () => {
//         await BookModel.deleteMany({});

//         book = await BookModel.create({
//             title: 'Ideias para Adiar o Fim do Mundo',
//             author: 'Ailton Krenak',
//             genre: 'Literatura Brasileira',
//         });
//         await request(app).post('/books').send(book);

//         bookId = book._id;
//     });
    
//     afterAll(async () => {
//         await BookModel.deleteMany({});
//         await mongoose.connection.close();
//     }); 

//      it('deve buscar livro com sucesso e retornar 200', async () => {
//         console.log(bookId);

//         const res = await request(app).get(`/books/${bookId}`);

//         expect(res.status).toBe(200);
//         expect(res.body._id).toBe(bookId);
//         expect(res.body.title).toBe('Ideias para Adiar o Fim do Mundo');
//         expect(res.body.author).toBe('Ailton Krenak');
//         expect(res.body.genre).toBe('Literatura Brasileira');
//         console.log(res.body.error);
//     });


//     // it('deve retornar 400 ao não encontrar usuário pelo id', async () => {
//     //     const res = await request(app).get(`/books/012`);

//     //     expect(res.status).toBe(400);
//     // });
    





// });