import { NextFunction, Request, Response } from "express";
import * as sinon from 'sinon';
import * as chai from 'chai';
import FeedbackService from "../../src/services/feedbacksService";
import FeedbackController from "../../src/controllers/feedbackController"

describe('FeedbacksController', () => {
    let feedbacksController: FeedbackController;
    let feedbackService: FeedbackService;
    let req: Request;
    let res: Response;
    let next: NextFunction;

    beforeEach(() => {
        feedbackService = new FeedbackService();
        feedbacksController = new FeedbackController(feedbackService);
        req = sinon.stub() as any as Request;
        res = sinon.stub() as any as Response;
        next = sinon.stub() as any as NextFunction;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
    });

    describe('create', () => {
        it('should return 201 status code', async () => {
            req.body = {};
            const createStub = sinon.stub(feedbackService, 'create').resolves(true);

            const statusSpy = sinon.spy(res, 'status');
            const endSpy = sinon.spy(res, 'end');

            await feedbacksController.create(req, res, next);

            sinon.assert.calledWith(statusSpy, 201);
            sinon.assert.calledOnce(endSpy);
            sinon.assert.calledOnce(createStub);
        });
    });

    // describe('getAll', () => {
    //     it('should return 200 status code and the feedbacks', async () => {
    //         const feedbacks = [{}, {}];
    //         const getAllStub = sinon.stub(feedbackService, 'getAll').resolves(feedbacks);

    //         await feedbacksController.getAll(req, res, next);

    //         sinon.assert.calledWith(res.status, 200);
    //         sinon.assert.calledWith(res.json, feedbacks);
    //         sinon.assert.calledOnce(getAllStub);
    //     });
    // });
});
