import { Router } from 'express';
import { CreateBookController } from '../controllers/CreateBookController';
import { GetAllBooksController } from '../controllers/GetAllBooksController';
import { GetBookByIdController } from '../controllers/GetBookIdController';
import { UpdateBookController } from '../controllers/UpdateBookController';
import { DeleteBookController } from '../controllers/DeleteBookController';

const router = Router();
const createBookController = new CreateBookController();
const getAllBooksController = new GetAllBooksController();
const getBookByIdController = new GetBookByIdController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

router.get('/', async (req, res) => {
    res.send('API rodando com sucesso');
});

router.post('/books', async (req, res) => {
    await createBookController.handle(req, res);
});

router.get('/books', async (req, res) =>{
    await getAllBooksController.handle(req, res);
})

router.get('/books/:id', async (req, res) => {
    await getBookByIdController.handle(req, res);
});

router.patch('/books/:id', async (req, res) => {
    await updateBookController.handle(req, res);
});

router.delete('/books/:id', async (req, res) => {
    await deleteBookController.handle(req, res);
});

export { router as bookRoutes };