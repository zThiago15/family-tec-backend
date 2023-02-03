import { NextFunction, Request, Response } from "express";
import { BadRequestError, NotFoundError } from 'restify-errors';

export default class FeedbacksMiddleware {
    authenticateFeedbackData = (req: Request, res: Response, next: NextFunction) => {
        const { name, feedback, starRating } = req.body;

        if (!name || !feedback || !starRating) {
            throw new NotFoundError('Error: name, feedback and starRating fields are required!')
        }

        if (typeof starRating != 'number' || starRating < 1 || starRating > 5) {
            throw new BadRequestError('Error: starRating must be a number from 1 to 5')
        }

        next();
    }
}