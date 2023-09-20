"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
        }
        next();
    };
};
exports.validateBody = validateBody;
//# sourceMappingURL=validation-body.js.map