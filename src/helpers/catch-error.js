"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = exports.MyError = void 0;
const constants_1 = require("../commons/constants");
class MyError extends Error {
    constructor({ message, status }) {
        super();
        this.message = message;
        this.status = status;
    }
}
exports.MyError = MyError;
const catchError = (status, message) => {
    const errorMessage = message ? message : constants_1.myMessage[status];
    return new MyError({ message: errorMessage, status });
};
exports.catchError = catchError;
//# sourceMappingURL=catch-error.js.map