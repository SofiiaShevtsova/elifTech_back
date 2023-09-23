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
exports.logoutUser = exports.getCurrentUser = exports.loginUser = exports.registerUser = void 0;
const auth_schema_1 = require("./auth-schema");
const commons_1 = require("../../helpers/commons");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userFind = yield auth_schema_1.UserTravel.findOne({ email });
        if (userFind) {
            throw (0, commons_1.catchError)(400, "A user with this email already exists!");
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashPassword = yield bcryptjs_1.default.hash(password, salt);
        const user = yield auth_schema_1.UserTravel.create(Object.assign(Object.assign({}, req.body), { password: hashPassword }));
        const { token, fullName, _id } = (0, commons_1.createToken)(user);
        if (token && fullName) {
            yield auth_schema_1.UserTravel.findByIdAndUpdate(_id, { token });
            res.status(201).json({ user: { email, fullName, _id }, token });
        }
    }
    catch (error) {
        throw (0, commons_1.catchError)(400, error.message);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield auth_schema_1.UserTravel.findOne({ email });
        if (!user) {
            throw (0, commons_1.catchError)(401, "Email or password is wrong");
        }
        const compareResult = yield bcryptjs_1.default.compare(password, user.password);
        if (!compareResult) {
            throw (0, commons_1.catchError)(401, "Email or password is wrong");
        }
        const { token, fullName, _id } = (0, commons_1.createToken)(user);
        if (token && fullName) {
            yield auth_schema_1.UserTravel.findByIdAndUpdate(_id, { token });
            res.status(201).json({ user: { email, fullName, _id }, token });
        }
    }
    catch (error) {
        throw (0, commons_1.catchError)(400, error.message);
    }
});
exports.loginUser = loginUser;
const getCurrentUser = (req, res, next) => {
    const { email, fullName, _id } = req.user;
    fullName && res.status(200).json({ email, fullName, _id });
};
exports.getCurrentUser = getCurrentUser;
const logoutUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const token = "";
        yield auth_schema_1.UserTravel.findByIdAndUpdate(user._id, { token });
        res.status(201).json({ message: "The user has logged out!" });
    }
    catch (error) {
        throw (0, commons_1.catchError)(400, error.message);
    }
});
exports.logoutUser = logoutUser;
//# sourceMappingURL=auth-operations.js.map