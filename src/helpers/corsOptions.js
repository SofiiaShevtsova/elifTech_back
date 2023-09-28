"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const commons_1 = require("./commons");
const urlArray = [
    "https://dulcet-dodol-f6ff6a.netlify.app",
    "https://leafy-naiad-8f8ed8.netlify.app",
    "https://shiny-mooncake-f5d524.netlify.app",
    'http://localhost:3000'
];
exports.corsOptions = {
    origin: (origin, callback) => {
        if (urlArray.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback((0, commons_1.catchError)(500, "Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};
//# sourceMappingURL=corsOptions.js.map