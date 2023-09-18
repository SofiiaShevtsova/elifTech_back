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
const shopsSchema_1 = require("../../models/shops/shopsSchema");
const router = express_1.default.Router();
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = shopsSchema_1.addShopsValidation.validate(req.body);
        if (error) {
            res.status(400).json({ message: `${error}` });
        }
        else {
            const shop = yield (0, shopsOperations_1.addShop)(req);
            res.json(shop);
        }
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