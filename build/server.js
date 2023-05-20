"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedback_1 = __importDefault(require("./routes/feedback"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const errorMiddleware_1 = __importDefault(require("./errorHandling/errorMiddleware"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./docs/swagger.json"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(feedback_1.default);
app.use(errorMiddleware_1.default);
app.get('/', (_req, res) => {
    return res.status(200).send('Welcome to server');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
exports.default = app;
