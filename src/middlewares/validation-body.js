"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const commons_1 = require("../helpers/commons");
const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next((0, commons_1.catchError)(400, error.message));
        }
        next();
    };
};
exports.validateBody = validateBody;
//# sourceMappingURL=validation-body.js.map