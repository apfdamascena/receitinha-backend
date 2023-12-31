import { NextFunction, Request, Response } from "express";

export type HttpExceptionContent = {
  status: number;
  message: string;
};

export class HttpException extends Error {
  status: number;
  message: string;

  constructor(content: HttpExceptionContent) {
    super(content.message);
    Object.assign(this, content);
  }
}

const errorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.status = error.status;
  res.locals.message = error.message;
  res.locals.data = {};

  return next();
};

export default errorHandler;
