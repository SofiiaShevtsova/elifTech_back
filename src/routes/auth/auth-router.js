"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../../commons/constants");
const commons_1 = require("../../middlewares/commons");
const commons_2 = require("../../validation-schemas/commons");
const commons_3 = require("../../helpers/commons");
const auth_operations_1 = require("../../models/authUser/auth-operations");
const router = express_1.default.Router();
router.post(constants_1.travelApp.ROUTERS.AUTH.register, (0, commons_1.validateBody)(commons_2.registerUserSchema), (0, commons_3.ctrlWrapper)(auth_operations_1.registerUser));
router.post(constants_1.travelApp.ROUTERS.AUTH.login, (0, commons_1.validateBody)(commons_2.loginUserSchema), (0, commons_3.ctrlWrapper)(auth_operations_1.loginUser));
router.get(constants_1.travelApp.ROUTERS.AUTH.current, commons_1.authenticate, (0, commons_3.ctrlWrapper)(auth_operations_1.getCurrentUser));
router.post(constants_1.travelApp.ROUTERS.AUTH.logout, commons_1.authenticate, (0, commons_3.ctrlWrapper)(auth_operations_1.logoutUser));
exports.default = router;
//# sourceMappingURL=auth-router.js.map