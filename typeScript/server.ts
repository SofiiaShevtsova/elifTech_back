import mongoose from "mongoose";
const myApp = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const { DB_HOST, PORT } = process.env;
if (DB_HOST) {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB_HOST)
    .then(() => {
      myApp.listen(PORT);
    })
    .catch(() => {
      process.exit(1);
    });
}
