import { Request, Response } from "express";

const requestHandler = (_: Request, res: Response) => {
  if (res.locals.body) {
    return res.status(res.locals.status).json(res.locals.body);
  } else {
    const response: any = {};

    if (res.locals.data) response.data = res.locals.data;
    if (res.locals.message) response.message = res.locals.message;

    return res.status(res.locals.status || 200).json(response);
  }
};

export default requestHandler;
