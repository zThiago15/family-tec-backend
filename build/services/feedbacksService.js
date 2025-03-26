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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class FeedbackService {
    constructor(prisma = new client_1.PrismaClient()) {
        this.prisma = prisma;
        this.create = (feedback) => __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.feedback.create({
                data: Object.assign({}, feedback)
            });
            return true;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const feedbacks = yield this.prisma.feedback.findMany();
            return feedbacks;
        });
        this.getTopFive = () => __awaiter(this, void 0, void 0, function* () {
            const topFive = yield this.prisma.feedback.findMany({
                where: {
                    starRating: 5
                },
                take: 5
            });
            return topFive;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.feedback.delete({
                where: {
                    id
                }
            });
            return;
        });
    }
}
exports.default = FeedbackService;
