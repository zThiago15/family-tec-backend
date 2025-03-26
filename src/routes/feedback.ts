import { Request, Response, Router } from 'express';
import FeedbacksController from '../controllers/feedbacksController';
import FeedbacksMiddleware from '../middlewares/feedbackMiddleware';

const router = Router();

const feedbacksController = new FeedbacksController();
const feedbacksMiddleware = new FeedbacksMiddleware();

router.post('/feedback', feedbacksMiddleware.authenticateFeedbackData, feedbacksController.create);
router.get('/feedbackstopfive', feedbacksController.getTopFive);
router.get('/feedbacks', feedbacksController.getAll);
router.get('/', (_req: Request, res: Response) => {
    return res.status(200).send('Welcome to the server!');
})
router.delete('/feedback/:id', feedbacksController.delete);

export default router;
