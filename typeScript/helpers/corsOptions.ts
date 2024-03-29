import { catchError } from "./commons";

const urlArray = [
  "https://dulcet-dodol-f6ff6a.netlify.app",
  "https://leafy-naiad-8f8ed8.netlify.app",
  "https://shiny-mooncake-f5d524.netlify.app",
  'http://localhost:3000'
];

export const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (urlArray.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(catchError(500, "Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
