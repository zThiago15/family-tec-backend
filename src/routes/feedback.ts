import { Router } from 'express';
import FeedbacksController from '../controllers/feedbacksController';

const router = Router();

const feedbacksController = new FeedbacksController();
router.post('/feedback', feedbacksController.create)

export default router;
