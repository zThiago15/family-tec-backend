"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedback_1 = __importDefault(require("./routes/feedback"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(feedback_1.default);
app.use((err, _req, res, _next) => {
    const { stack, message, name } = err;
    console.error(stack);
    switch (name) {
        case 'BadRequestError':
            return res.status(400).json({ message });
        case 'NotFoundError':
            return res.status(404).json({ message });
        default:
            return res.status(500).json({ message });
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
exports.default = app;
