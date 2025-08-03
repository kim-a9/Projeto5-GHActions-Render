import { Router } from 'express';
import { CreateBookController } from '../controllers/CreateBookController';
import { GetBookByIdController } from '../controllers/GetBookIdController'

const router = Router();
const createBookController = new CreateBookController();
const getBookByIController = new GetBookByIdController();

router.get('/', async (req, res) => {
    res.send('API rodando com sucesso');
});

router.post('/books', async (req, res) => {
    await createBookController.handle(req, res);
});

router.get('/books/:id', async (req, res) => {
    await getBookByIController.handle(req, res);
});





export { router as bookRoutes };