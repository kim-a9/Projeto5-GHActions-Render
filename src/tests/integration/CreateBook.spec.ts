// import request from 'supertest';
// import app from '../../infra/server/server';
// import mongoose from 'mongoose';
// import { BookModel } from '../../infra/database/MongooseBookModel';

// describe('POST / books', () => {
//     beforeAll(async () => {
//         await mongoose.createConnection(process.env.MONGO_URL_TEST!);
//     });

//     beforeEach(async () => {
//         await BookModel.deleteMany({});
//     });

//     afterAll(async () => {
//     await BookModel.deleteMany({});
//     await mongoose.connection.close();
//     }); 

//     it('deve criar um novo livro com sucesso', async () => {
//     const response = await request(app).post('/books').send({
//         title: 'Ideias para Adiar o Fim do Mundo',
//         author: 'Ailton Krenak',
//         genre: '',
//     });

//     expect(response.status).toBe(201);

//     });






// });