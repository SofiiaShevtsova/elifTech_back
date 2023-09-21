import express from "express";
import { constants } from "../../commons/constants";
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
} from "../../models/authUser/authOperations";

const router = express.Router();

router.post(
  constants.ROUTERS.AUTH.register,
  validateBody(registerUserSchema),
  ctrlWrapper(registerUser)
);

router.post(
  constants.ROUTERS.AUTH.login,
  validateBody(loginUserSchema),
  ctrlWrapper(loginUser)
);

router.get(
  constants.ROUTERS.AUTH.current,
  authenticate,
  ctrlWrapper(getCurrentUser)
);

router.post(
  constants.ROUTERS.AUTH.logout,
  authenticate,
  ctrlWrapper(logoutUser)
);

export default router;
