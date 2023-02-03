import { Router } from 'express';
import FeedbacksController from '../controllers/feedbacksController';
import FeedbacksMiddleware from '../middlewares/feedbackMiddleware';

const router = Router();

const feedbacksController = new FeedbacksController();
const feedbacksMiddleware = new FeedbacksMiddleware();

router.post('/feedback', feedbacksMiddleware.authenticateFeedbackData, feedbacksController.create)

export default router;
