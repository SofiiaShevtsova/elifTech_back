import express from "express";
import { catchError } from "../helpers/commons";

export const validateBody = (schema: any) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { error }: { error: Error} = schema.validate(req.body);
    if (error) {
      next(catchError(400, error.message));
    }
    next();
  };
};

