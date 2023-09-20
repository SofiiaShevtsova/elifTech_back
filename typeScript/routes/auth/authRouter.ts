import express, { NextFunction, Request, Response } from "express";
import { constants } from "../../commons/constants";
import { IUserTravelApp, IUserAdd } from "../../types/commons";
import { validateBody } from "../../middlewares/commons";
import { registerUserSchema } from '../../validation-schemas/commons'
import {catchError} from '../../helpers/commons'

const router = express.Router();

router.post(
  constants.ROUTERS.AUTH.register, validateBody(registerUserSchema) ,
  async (
    req: Request<{}, {}, IUserAdd>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = req.body;
      //   const addedOrder = await addNewOrder(req.body);
      //   res.status(201).json(addedOrder);
    } catch (error: any) {
     throw catchError(400, error.message);
    }
  }
);

// router.get(
//   "/",
//   async (
//     req: { query: { email: string; phone: string } },
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     try {
//       const listOfOrders = await getAllOrders({ ...req.query });
//       res.json(listOfOrders);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

export default router;
