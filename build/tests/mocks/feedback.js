"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topFiveFeedbacksMock = exports.feedbackToCreateMock = void 0;
const allFeedbacksMock = [{
        id: 1,
        name: 'John',
        feedback: 'the service was great!',
        starRating: 5
    }];
exports.feedbackToCreateMock = {
    name: 'John',
    feedback: 'the service was great!',
    starRating: 5
};
exports.topFiveFeedbacksMock = [{
        id: 1,
        name: 'John',
        feedback: 'the service was great!',
        starRating: 5
    },
    {
        id: 2,
        name: 'Maria',
        feedback: 'the service was great!',
        starRating: 5
    },
    {
        id: 3,
        name: 'João',
        feedback: 'the service was great!',
        starRating: 5
    },
    {
        id: 4,
        name: 'Gisele',
        feedback: 'the service was great!',
        starRating: 5
    },
    {
        id: 5,
        name: 'Maria',
        feedback: 'the service was great!',
        starRating: 5
    }
];
exports.default = allFeedbacksMock;
