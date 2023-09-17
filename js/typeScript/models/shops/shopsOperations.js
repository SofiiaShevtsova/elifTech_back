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
const shopsSchema_1 = require("./shopsSchema");
const getAllShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield shopsSchema_1.ShopsList.find();
        return list;
    }
    catch (error) {
        return error;
    }
});
const addShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newShop = yield shopsSchema_1.ShopsList.create(req.body);
    return newShop;
});
module.exports = {
    getAllShops,
    addShop,
};
//# sourceMappingURL=shopsOperations.js.map