const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const { DB_HOST, PORT} = process.env;
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
  })
  .catch((er) => {
    process.exit(1);
  });

