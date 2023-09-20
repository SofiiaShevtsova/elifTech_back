"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shopsOperations_1 = require("../../models/shops/shopsOperations");
const shops_validation_1 = require("../../validation-schemas/shops-validation");
const validation_body_1 = require("../../middlewares/validation-body");
const router = express_1.default.Router();
router.post("/", (0, validation_body_1.validateBody)(shops_validation_1.addShopsValidation), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shop = yield (0, shopsOperations_1.addShop)(req);
        res.json(shop);
    }
    catch (error) {
        next(error);
    }
}));
router.get("/allShops", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listOfShops = yield (0, shopsOperations_1.getAllShops)();
        res.json(listOfShops);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=shopsRouter.js.map