import { PrismaClient } from "@prisma/client";
import IFeedback from "../interfaces/feedback";

export default class FeedbackService {
    constructor(private prisma = new PrismaClient()) { }

    create = async (feedback: IFeedback) => {
        await this.prisma.feedback.create({
            data: {
                ...feedback
            }
        })
        return true
    }

    getAll = async () => {
        const feedbacks = await this.prisma.feedback.findMany();

        return feedbacks
    }
}