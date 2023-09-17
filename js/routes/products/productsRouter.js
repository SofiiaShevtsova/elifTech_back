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
const { getProducts, addProduct, } = require("../../models/products/productsOperations");
const router = express_1.default.Router();
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield addProduct(req);
        res.json(product);
    }
    catch (error) {
        next(error);
    }
}));
router.get("/:shop_id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shop_id } = req.params;
        const listOfProducts = yield getProducts(shop_id);
        res.json(listOfProducts);
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
//# sourceMappingURL=productsRouter.js.map