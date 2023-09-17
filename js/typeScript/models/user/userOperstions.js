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
const userSchema_1 = require("./userSchema");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFind = yield userSchema_1.Users.findOne(Object.assign({}, req));
        if (userFind) {
            return userFind;
        }
    }
    catch (error) {
        return error;
    }
});
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req;
        const userFind = yield userSchema_1.Users.findOne({ email });
        if (userFind) {
            return userFind;
        }
        const { error } = userSchema_1.addUserValidation.validate(Object.assign({}, req));
        if (error) {
            res.status(400).json({ message: `${error}` });
        }
        else {
            const newUser = yield userSchema_1.Users.create(Object.assign({}, req));
            return newUser;
        }
    }
    catch (error) {
        return error;
    }
});
module.exports = {
    getUser,
    addUser,
};
//# sourceMappingURL=userOperstions.js.map