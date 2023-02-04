import { Router } from 'express';
import FeedbacksController from '../../tests/controllers/feedbackController';
import FeedbacksMiddleware from '../middlewares/feedbackMiddleware';

const router = Router();

const feedbacksController = new FeedbacksController();
const feedbacksMiddleware = new FeedbacksMiddleware();

router.post('/feedback', feedbacksMiddleware.authenticateFeedbackData, feedbacksController.create);
router.get('/feedbacks', feedbacksController.getAll);

export default router;
