import express, { Request, Response, Router } from 'express';
import feedbackRouter from './routes/feedback';
import 'express-async-errors'
import cors from 'cors';
import errorMiddleware from './errorHandling/errorMiddleware';

const app = express();

app.use(cors())
app.use(express.json());
app.use(feedbackRouter)

app.use(errorMiddleware);

app.get('/', (_req: Request, res: Response) => {
    return res.status(200).send('Welcome to server')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    
})

export default app;
