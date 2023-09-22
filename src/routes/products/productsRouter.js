"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsOperations_1 = require("../../models/products/productsOperations");
const ctrl_wrapper_1 = require("../../helpers/ctrl-wrapper");
const router = express_1.default.Router();
router.post("/", (0, ctrl_wrapper_1.ctrlWrapper)(productsOperations_1.addProduct));
router.get("/:shop_id", (0, ctrl_wrapper_1.ctrlWrapper)(productsOperations_1.getProducts));
exports.default = router;
//# sourceMappingURL=productsRouter.js.map