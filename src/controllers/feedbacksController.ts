import { NextFunction, Request, Response } from "express";
import FeedbackService from "../services/feedbacksService";

export default class FeedbacksController {
    constructor(private feedbackService = new FeedbackService()) { }

    create = async (req: Request, res: Response, _next: NextFunction) => {
        const feedback = req.body;

        await this.feedbackService.create(feedback)
        return res.status(201).end()
    }
}