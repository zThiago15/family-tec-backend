import { PrismaClient } from "@prisma/client";
import IFeedback from "../interfaces/feedback";
export default class FeedbackService {
    private prisma;
    constructor(prisma?: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined, import("@prisma/client/runtime").DefaultArgs>);
    create: (feedback: IFeedback) => Promise<boolean>;
    getAll: () => Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        feedback: string;
        starRating: number;
    }, unknown, never> & {})[]>;
    getTopFive: () => Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        feedback: string;
        starRating: number;
    }, unknown, never> & {})[]>;
    delete: (id: number) => Promise<void>;
}
