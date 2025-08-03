import { Router } from 'express';
import { CreateBookController } from '../controllers/CreateBookController';



const router = Router();
const createBookController = new CreateBookController();

router.get('/', async (req, res) => {
    res.send('API rodando com sucesso');
});

router.post('/books', async (req, res) => {
    await createBookController.handle(req, res);
});





export { router as bookRoutes };