import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import router from './routes/feedback';
import 'express-async-errors'

const app = express();

app.use(express.json());
app.use(router)

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {

    const { stack, message, name } = err as any;

    console.error(stack);
    
    switch (name) {
        case 'BadRequestError':
            return res.status(400).json({ message })
        case 'NotFoundError':
            return res.status(404).json({ message })
        default:
            return res.status(500).json({ message })
        }
    
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    
})