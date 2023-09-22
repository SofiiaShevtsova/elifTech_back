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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getProducts = void 0;
const products_schema_1 = require("./products-schema");
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shop_id } = req.params;
        const list = yield products_schema_1.Products.find({ shop: shop_id }, "-createdAt -updatedAt");
        if (!list) {
            throw new Error();
        }
        res.json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.getProducts = getProducts;
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield products_schema_1.Products.create(Object.assign({}, req.body));
        res.json(product);
    }
    catch (error) {
        next(error);
    }
});
exports.addProduct = addProduct;
//# sourceMappingURL=products-operations.js.map