import { Router } from 'express';
import { CreateBookController } from '../controllers/CreateBookController';
import { GetBookByIdController } from '../controllers/GetBookIdController';
import { UpdateBookController } from '../controllers/UpdateBookController';

const router = Router();
const createBookController = new CreateBookController();
const getBookByIController = new GetBookByIdController();
const updateBookController = new UpdateBookController();

router.get('/', async (req, res) => {
    res.send('API rodando com sucesso');
});

router.post('/books', async (req, res) => {
    await createBookController.handle(req, res);
});

router.get('/books/:id', async (req, res) => {
    await getBookByIController.handle(req, res);
});

router.patch('/books/:id', async (req, res) => {
    await updateBookController.handle(req, res);
});

// {
//   "title": "Torto Arado",
//   "author": "autor",
//   "genre": "genero"
// }





export { router as bookRoutes };