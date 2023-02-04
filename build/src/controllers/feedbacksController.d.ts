import { NextFunction, Request, Response } from "express";
import FeedbackService from "../services/feedbacksService";
export default class FeedbacksController {
    private feedbackService;
    constructor(feedbackService?: FeedbackService);
    create: (req: Request, res: Response, _next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    getAll: (_req: Request, res: Response, _next: NextFunction) => Promise<Response<any, Record<string, any>>>;
}
