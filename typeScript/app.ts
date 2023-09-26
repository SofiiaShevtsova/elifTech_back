import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import logger from "morgan";
import { myMessage, delivery, travelApp } from "./commons/constants";
import { MyError, corsOptions } from "./helpers/commons";

import productsRouter from "./routes/products/products-router";
import shopsRouter from "./routes/shops/shops-router";
import ordersRouter from "./routes/orders/orders-router";
import userRouter from "./routes/auth/auth-router";
import tripsRouter from "./routes/trip/trips-router";
import bookingsRouter from "./routes/booking/booking-router";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(delivery.public));

app.use(delivery.routes.shops, shopsRouter);
app.use(delivery.routes.products, productsRouter);
app.use(delivery.routes.orders, ordersRouter);
app.use(travelApp.ROUTERS.AUTH.base, userRouter);
app.use(travelApp.ROUTERS.TRIPS, tripsRouter);
app.use(travelApp.ROUTERS.BOOKINGS, bookingsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: myMessage.notFound });
});

app.use(
  (err: MyError, req: Request, res: Response, next: NextFunction): void => {
    res.status(err.status || 500).json({ message: err.message });
  }
);

module.exports = app;
