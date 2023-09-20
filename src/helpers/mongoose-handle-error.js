"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseHandleError = void 0;
const mongooseHandleError = (error, data, next) => {
    const status = error.name === "MongoServerError" && error.code === 11000 ? 409 : 400;
    error.status = status;
    next();
};
exports.mongooseHandleError = mongooseHandleError;
//# sourceMappingURL=mongoose-handle-error.js.map