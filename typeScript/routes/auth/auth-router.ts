import express from "express";
import { travelApp } from "../../commons/constants";
import { authenticate, validateBody } from "../../middlewares/commons";
import {
  registerUserSchema,
  loginUserSchema,
} from "../../validation-schemas/commons";
import { ctrlWrapper } from "../../helpers/commons";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../../models/authUser/auth-operations";

const router = express.Router();

router.post(
  travelApp.ROUTERS.AUTH.register,
  validateBody(registerUserSchema),
  ctrlWrapper(registerUser)
);

router.post(
  travelApp.ROUTERS.AUTH.login,
  validateBody(loginUserSchema),
  ctrlWrapper(loginUser)
);

router.get(
  travelApp.ROUTERS.AUTH.current,
  authenticate,
  ctrlWrapper(getCurrentUser)
);

router.post(
  travelApp.ROUTERS.AUTH.logout,
  authenticate,
  ctrlWrapper(logoutUser)
);

export default router;
