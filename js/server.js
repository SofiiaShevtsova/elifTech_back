"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const dotenv = require("dotenv");
dotenv.config();
const { DB_HOST, PORT } = process.env;
if (DB_HOST) {
    mongoose_1.default.set("strictQuery", true);
    mongoose_1.default
        .connect(DB_HOST)
        .then(() => {
        app_1.default.listen(PORT);
    })
        .catch(() => {
        process.exit(1);
    });
}
//# sourceMappingURL=server.js.map