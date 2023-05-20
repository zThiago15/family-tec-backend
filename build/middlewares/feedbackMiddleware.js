"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
class FeedbacksMiddleware {
    constructor() {
        this.authenticateFeedbackData = (req, res, next) => {
            const { name, feedback, starRating } = req.body;
            if (!name || !feedback || !starRating) {
                throw new restify_errors_1.NotFoundError('Error: name, feedback and starRating fields are required!');
            }
            if (typeof starRating != 'number' || starRating < 1 || starRating > 5) {
                throw new restify_errors_1.BadRequestError('Error: starRating must be a number from 1 to 5');
            }
            next();
        };
    }
}
exports.default = FeedbacksMiddleware;
