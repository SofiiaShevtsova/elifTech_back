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
exports.addShop = exports.getAllShops = void 0;
const shops_schema_1 = require("./shops-schema");
const getAllShops = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield shops_schema_1.ShopsList.find();
        res.json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllShops = getAllShops;
const addShop = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newShop = yield shops_schema_1.ShopsList.create(req.body);
        res.json(newShop);
    }
    catch (error) {
        next(error);
    }
});
exports.addShop = addShop;
//# sourceMappingURL=shops-operations.js.map