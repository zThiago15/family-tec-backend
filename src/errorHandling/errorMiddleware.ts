import { NextFunction, Request, Response } from "express";

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {

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
    
  }

export default errorMiddleware;
