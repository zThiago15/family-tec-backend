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
const chai_1 = __importDefault(require("chai"));
const sinon = __importStar(require("sinon"));
const chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default);
const feedbacksService_1 = __importDefault(require("../../services/feedbacksService"));
const server_1 = __importDefault(require("../../server"));
const feedback_1 = __importStar(require("../mocks/feedback"));
describe('FeedbacksController', () => {
    const expect = chai_1.default.expect;
    beforeEach(() => {
        const feedbackService = new feedbacksService_1.default();
        sinon.stub(feedbackService, 'getAll').resolves(feedback_1.default);
        sinon.stub(feedbackService, 'getTopFive').resolves(feedback_1.topFiveFeedbacksMock);
        sinon.stub(feedbackService, 'create').resolves(true);
    });
    afterEach(() => {
        sinon.restore();
    });
    describe('getAll', () => {
        it('should return all the feedbacks', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai_1.default.request(server_1.default).get('/feedbacks');
            expect(response.status).to.be.equal(200);
        }));
    });
    describe('getTopFive', () => {
        it('should return 200 status for getting top five feedbacks', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai_1.default.request(server_1.default).get('/feedbacktopfive');
            expect(response.status).to.be.equal(200);
        }));
    });
    describe('create', () => {
        it('should send a 404 status if name, feedback or starRating are empty', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai_1.default.request(server_1.default).post('/feedback').send({
                name: 'John',
                starRating: 5,
            });
            expect(response.status).to.be.equal(404);
        }));
        it('should send a 400 status if starRating is greater than 5', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai_1.default.request(server_1.default).post('/feedback').send({
                name: 'John',
                feedback: 'great service',
                starRating: 8,
            });
            expect(response.status).to.be.equal(400);
        }));
        it('should create a feedback sending a 201 status', () => __awaiter(void 0, void 0, void 0, function* () {
            const feedbackBody = {
                name: 'John',
                feedback: 'great service',
                starRating: 5,
            };
            const response = yield chai_1.default.request(server_1.default).post('/feedback').send(feedbackBody);
            expect(response.status).to.be.equal(201);
        }));
    });
});
