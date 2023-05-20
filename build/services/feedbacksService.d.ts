import { PrismaClient } from "@prisma/client";
import IFeedback from "../interfaces/feedback";
export default class FeedbackService {
    private prisma;
    constructor(prisma?: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>);
    create: (feedback: IFeedback) => Promise<boolean>;
    getAll: () => Promise<import(".prisma/client").Feedback[]>;
    getTopFive: () => Promise<import(".prisma/client").Feedback[]>;
}
