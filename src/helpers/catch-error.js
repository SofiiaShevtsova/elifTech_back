"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
const constants_1 = require("../commons/constants");
class MyError extends Error {
    constructor({ message, status }) {
        super();
        this.message = message;
        this.status = status;
    }
}
const catchError = (status, message) => {
    const errorMessage = message ? message : constants_1.myMessage[status];
    const error = new MyError({ message: errorMessage, status });
    return error;
};
exports.catchError = catchError;
//# sourceMappingURL=catch-error.js.map