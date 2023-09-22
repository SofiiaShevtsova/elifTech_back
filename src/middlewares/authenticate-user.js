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
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_schema_1 = require("../models/authUser/auth-schema");
const commons_1 = require("../helpers/commons");
dotenv_1.default.config();
const { ACCESS_SECRET_KEY } = process.env;
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
        next((0, commons_1.catchError)(401, "Not authorized"));
    }
    try {
        if (ACCESS_SECRET_KEY) {
            const payload = jsonwebtoken_1.default.verify(token, ACCESS_SECRET_KEY);
            const user = yield auth_schema_1.UserTravel.findById(payload.id);
            if (!user || !user.token || user.token !== token) {
                next((0, commons_1.catchError)(401, "Not authorized"));
            }
            if (user) {
                req.user = user;
            }
            next();
        }
    }
    catch (error) {
        next((0, commons_1.catchError)(401, "Not authorized"));
    }
});
exports.authenticate = authenticate;
//# sourceMappingURL=authenticate-user.js.map