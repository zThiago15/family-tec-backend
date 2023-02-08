import { PrismaClient } from "@prisma/client"
import { expect } from "chai";
import sinon from 'sinon';
import FeedbackService from "../../services/feedbacksService";
import allFeedbacksMock, { feedbackToCreateMock, topFiveFeedbacksMock } from "../mocks/feedback";

describe('feedbackService', () => {
    const feedbackService = new FeedbackService();

    beforeEach(() => {
        const prisma = new PrismaClient()
        
        sinon.stub(prisma.feedback , 'create').resolves(allFeedbacksMock[0]);
        sinon.stub(feedbackService, 'getAll').resolves(allFeedbacksMock);
        sinon.stub(feedbackService, 'getTopFive').resolves(topFiveFeedbacksMock);
    })

    afterEach(() => {
        sinon.restore()
    })

    describe('create', () => {
        it('should return a true value after creating feedback', async () => {
            const response = await feedbackService.create(feedbackToCreateMock);

            expect(response).to.be.true;
        })
    })

    
    describe('getAll', () => {
        it('should return all the feedbacks', async () => {
            const response = await feedbackService.getAll();

            expect(response).to.be.equal(allFeedbacksMock);
        })
    })

    describe('create', () => {
        it('should return top five feedbacks', async () => {
            const response = await feedbackService.getTopFive();

            expect(response).to.be.equal(topFiveFeedbacksMock);
        })
    })
})