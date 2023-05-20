"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, _req, res, _next) => {
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
};
exports.default = errorMiddleware;
