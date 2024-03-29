import { NextFunction, Request, Response } from 'express'

type MyController = (req: Request<any, any, any>, res: Response<any>, next: NextFunction) => void;

export const ctrlWrapper = (func: MyController): MyController => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};