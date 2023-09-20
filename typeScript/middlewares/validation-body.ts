// const { HttpError } = require("../helpers");
import express from "express";

export const validateBody = (schema: any) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
    //   next(HttpError(400, error.message));
    }
    next();
  };
};

