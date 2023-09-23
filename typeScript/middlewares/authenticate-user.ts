import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { NextFunction, Request, Response } from "express";
import { UserTravel } from '../models/authUser/auth-schema';
import { JwtPayload, IUserTravelApp } from '../types/commons';
import {catchError} from '../helpers/commons'

dotenv.config();

declare global {
    namespace Express {
        interface Request {
            user: IUserTravelApp;
        }
    }
}

const { ACCESS_SECRET_KEY } = process.env;

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" && token === '') {
        next(catchError(401, "Not authorized"));
    }
    try {
        if (ACCESS_SECRET_KEY) {
            const payload: JwtPayload = jwt.verify(token, ACCESS_SECRET_KEY) as unknown as JwtPayload;
            const user = await UserTravel.findById(payload.id);
            if (!user || !user.token || user.token !== token) {
              next(catchError(401, "Not authorized"));
            }
            if (user) {
                req.user = user;
            }
            next();
        }

    } catch (error) {
        next(catchError(401, "Not authorized"));
    }
};