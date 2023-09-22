"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shopsOperations_1 = require("../../models/shops/shopsOperations");
const commons_1 = require("../../validation-schemas/commons");
const commons_2 = require("../../middlewares/commons");
const commons_3 = require("../../helpers/commons");
const router = express_1.default.Router();
router.post("/", (0, commons_2.validateBody)(commons_1.addShopsValidation), (0, commons_3.ctrlWrapper)(shopsOperations_1.addShop));
router.get("/allShops", (0, commons_3.ctrlWrapper)(shopsOperations_1.getAllShops));
exports.default = router;
//# sourceMappingURL=shopsRouter.js.map