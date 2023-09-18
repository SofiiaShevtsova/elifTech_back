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
const productsSchema_1 = require("./productsSchema");
const getProducts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield productsSchema_1.Products.find({ shop: id }, "-createdAt -updatedAt");
        return list;
    }
    catch (error) {
        return error;
    }
});
exports.getProducts = getProducts;
const addProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productsSchema_1.Products.create(Object.assign({}, req.body));
    return product;
});
exports.addProduct = addProduct;
//# sourceMappingURL=productsOperations.js.map