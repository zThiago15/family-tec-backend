import { NextFunction, Request, Response } from "express";
export default class FeedbacksMiddleware {
    authenticateFeedbackData: (req: Request, res: Response, next: NextFunction) => void;
}
