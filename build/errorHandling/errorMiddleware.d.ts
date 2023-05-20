import { NextFunction, Request, Response } from "express";
declare const errorMiddleware: (err: Error, _req: Request, res: Response, _next: NextFunction) => Response<any, Record<string, any>>;
export default errorMiddleware;
