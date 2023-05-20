"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedbacksController_1 = __importDefault(require("../controllers/feedbacksController"));
const feedbackMiddleware_1 = __importDefault(require("../middlewares/feedbackMiddleware"));
const router = (0, express_1.Router)();
const feedbacksController = new feedbacksController_1.default();
const feedbacksMiddleware = new feedbackMiddleware_1.default();
router.post('/feedback', feedbacksMiddleware.authenticateFeedbackData, feedbacksController.create);
router.get('/feedbackstopfive', feedbacksController.getTopFive);
router.get('/feedbacks', feedbacksController.getAll);
exports.default = router;
