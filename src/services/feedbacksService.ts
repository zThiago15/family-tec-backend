import { PrismaClient } from "@prisma/client";
import IFeedback from "../interfaces/feedback";

export default class FeedbackService {
    constructor(private prisma = new PrismaClient()) { }

    create = async (feedback: IFeedback) => {
        const feedbackCreated = await this.prisma.feedback.create({
            data: {
                ...feedback
            }
        })
        console.log(feedbackCreated);
        
    }
}