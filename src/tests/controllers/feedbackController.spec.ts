import chai, { expect } from "chai";
import * as sinon from 'sinon';
import chatHttp from 'chai-http';
chai.use(chatHttp)

import FeedbackService from "../../services/feedbacksService";
import app from "../../server";
import allFeedbacksMock, { topFiveFeedbacksMock } from "../mocks/feedback";

describe('FeedbacksController', () => {
    const expect = chai.expect;

    beforeEach(() => {
        const feedbackService = new FeedbackService();
        sinon.stub(feedbackService, 'getAll').resolves(allFeedbacksMock);
        sinon.stub(feedbackService, 'getTopFive').resolves(topFiveFeedbacksMock);
        sinon.stub(feedbackService, 'create').resolves(true);
    })

    afterEach(() => {
        sinon.restore();
    })

    describe('getAll', () => {
        it('should return all the feedbacks', async () => {
            
            const response = await chai.request(app).get('/feedbacks')

            expect(response.status).to.be.equal(200);
        });
    });

    describe('getTopFive', () => {
        it('should return 200 status for getting top five feedbacks', async () => {
            
            const response = await chai.request(app).get('/feedbacktopfive');

            expect(response.status).to.be.equal(200);
        });
    });

    describe('create', () => {
        it('should send a 404 status if name, feedback or starRating are empty', async () => {
            const response = await chai.request(app).post('/feedback').send({
                name: 'John',
                starRating: 5,
            });
            expect(response.status).to.be.equal(404);
        });

        it('should send a 400 status if starRating is greater than 5', async () => {
            const response = await chai.request(app).post('/feedback').send({
                name: 'John',
                feedback: 'great service',
                starRating: 8,
            });
            expect(response.status).to.be.equal(400);
        });

        it('should create a feedback sending a 201 status', async () => {
            const feedbackBody = {
                name: 'John',
                feedback: 'great service',
                starRating: 5,
            }

            const response = await chai.request(app).post('/feedback').send(feedbackBody);

            expect(response.status).to.be.equal(201);
        })
    })
});
