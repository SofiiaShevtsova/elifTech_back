import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import express from 'express'
import { UserTravel } from '../models/authUser/authSchema';
import { JwtPayload, IUserTravelApp } from '../types/commons';
// const { User } = require("../models/auth/userSchema");
// const HttpError = require("../helpers/HttpError");

dotenv.config();

declare global {
    namespace Express {
        interface Request {
            user: IUserTravelApp;
        }
    }
}

const { ACCESS_SECRET_KEY } = process.env;

export const authenticate = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
        // next(HttpError(401, "Not authorized"));
    }
    try {
        if (ACCESS_SECRET_KEY) {
            const payload: JwtPayload = jwt.verify(token, ACCESS_SECRET_KEY) as unknown as JwtPayload;
            const user = await UserTravel.findById(payload.id);
            // if (!user || !user.token || user.token !== token) {
            // //   next(HttpError(401, "Not authorized"));
            // }
            if (user) {
                req.user = user;
            }
            next();
        }

    } catch (error) {
        // next(HttpError(401, "Not authorized"));
    }
};