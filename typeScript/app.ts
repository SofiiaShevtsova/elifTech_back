import { myMessage, delivery } from './commons/constants';
import express from 'express';
const logger = require("morgan");
const cors = require("cors");

const productsRouter = require("./routes/products/productsRouter");
const shopsRouter = require("./routes/shops/shopsRouter");
const ordersRouter = require("./routes/orders/ordersRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(delivery.public));

app.use(delivery.routes.shops, shopsRouter);
app.use(delivery.routes.products, productsRouter);
app.use(delivery.routes.orders, ordersRouter);

app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message:  myMessage.notFound});
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
