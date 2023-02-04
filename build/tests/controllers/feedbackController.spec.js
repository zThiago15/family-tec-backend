"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const feedbacksService_1 = __importDefault(require("../../src/services/feedbacksService"));
const feedbackController_1 = __importDefault(require("../../src/controllers/feedbackController"));
describe('FeedbacksController', () => {
    let feedbacksController;
    let feedbackService;
    let req;
    let res;
    let next;
    beforeEach(() => {
        feedbackService = new feedbacksService_1.default();
        feedbacksController = new feedbackController_1.default(feedbackService);
        req = sinon.stub();
        res = sinon.stub();
        next = sinon.stub();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
    });
    describe('create', () => {
        it('should return 201 status code', () => __awaiter(void 0, void 0, void 0, function* () {
            req.body = {};
            const createStub = sinon.stub(feedbackService, 'create').resolves(true);
            const statusSpy = sinon.spy(res, 'status');
            const endSpy = sinon.spy(res, 'end');
            yield feedbacksController.create(req, res, next);
            sinon.assert.calledWith(statusSpy, 201);
            sinon.assert.calledOnce(endSpy);
            sinon.assert.calledOnce(createStub);
        }));
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
