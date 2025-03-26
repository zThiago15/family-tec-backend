import { NextFunction, Request, Response } from "express";
import FeedbackService from "../services/feedbacksService";

export default class FeedbacksController {
    constructor(private feedbackService = new FeedbackService()) { }

    create = async (req: Request, res: Response, _next: NextFunction) => {
        const feedback = req.body;

        await this.feedbackService.create(feedback)
        return res.status(201).end()
    }

    getAll = async (_req: Request, res: Response, _next: NextFunction) => {
        const feedbacks = await this.feedbackService.getAll();
        return res.status(200).json(feedbacks)
    }

    getTopFive = async (_req: Request, res: Response, _next: NextFunction) => {
        const topFive = await this.feedbackService.getTopFive();
        return res.status(200).json(topFive)
    }

    delete = async (_req: Request, res: Response, _next: NextFunction) => {
        await this.feedbackService.getTopFive();
        return res.status(204).send('Feedback deleted');
    }

}