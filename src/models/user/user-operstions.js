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
exports.addUser = exports.getUser = void 0;
const user_schema_1 = require("./user-schema");
const getUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFind = yield user_schema_1.Users.findOne(Object.assign({}, req));
        if (!userFind) {
            throw new Error("Can not find user!");
        }
        return userFind;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getUser = getUser;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req;
        const userFind = yield user_schema_1.Users.findOne({ email });
        if (userFind) {
            return userFind;
        }
        const newUser = yield user_schema_1.Users.create(Object.assign({}, req));
        return newUser;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.addUser = addUser;
//# sourceMappingURL=user-operstions.js.map