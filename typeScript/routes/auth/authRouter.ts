import express from "express";
import { constants } from "../../commons/constants";
import { IUserTravelApp, IUserAdd } from "../../types/commons";
import { validateBody } from "../../middlewares/commons";
import {registerUserSchema} from '../../validation-schemas/commons'

const router = express.Router();

router.post(
  constants.ROUTERS.AUTH.register, validateBody(registerUserSchema) ,
  async (
    req: express.Request<{}, {}, IUserAdd>,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const user = req.body;
      //   const addedOrder = await addNewOrder(req.body);
      //   res.status(201).json(addedOrder);
    } catch (error) {
      next(error);
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
