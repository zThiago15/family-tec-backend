/* import { NextFunction, Request, Response } from "express";
import * as sinon from 'sinon';
import { expect } from "chai";

import FeedbackService from "../../services/feedbacksService";
// import FeedbackController from "../../controllers/feedbacksController"

describe('FeedbacksController', () => {
    let feedbackController: FeedbackController;
    let feedbackService: FeedbackService;
    let req: Request;
    let res: any;
    let next: NextFunction;

    beforeEach(() => {
        feedbackService = new FeedbackService();
        feedbackController = new FeedbackController(feedbackService);

        req = {} as Request
        res = {} as Response
        next = sinon.stub() as any as NextFunction
        res.status = sinon.stub()
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
    });

    afterEach(() => {
        sinon.restore();
    })

    describe('create', () => {
        it('should return 201 status code after creating feedback', async () => {
            req.body = {};

            await feedbackController.create(req, res, next)
            expect(res.status.calledWith(201)).to.be.true;
        });
    });
});
 */