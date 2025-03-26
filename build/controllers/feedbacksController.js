"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedbacksService_1 = __importDefault(require("../services/feedbacksService"));
class FeedbacksController {
    constructor(feedbackService = new feedbacksService_1.default()) {
        this.feedbackService = feedbackService;
        this.create = (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            const feedback = req.body;
            yield this.feedbackService.create(feedback);
            return res.status(201).end();
        });
        this.getAll = (_req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            const feedbacks = yield this.feedbackService.getAll();
            return res.status(200).json(feedbacks);
        });
        this.getTopFive = (_req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            const topFive = yield this.feedbackService.getTopFive();
            return res.status(200).json(topFive);
        });
        this.delete = (_req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            yield this.feedbackService.getTopFive();
            return res.status(204).send('Feedback deleted');
        });
    }
}
exports.default = FeedbacksController;
