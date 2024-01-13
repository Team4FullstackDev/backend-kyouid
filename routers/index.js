const express = require("express");
const app = express.Router();

const imageRouter = require("./imageRoute");
const productsRouter = require("./productsRoute");
const userRouter = require("./usersRoute");
const wishlist = require("./wishlist");
const shipments = require("./shipmentsRouter");
const payments = require("./shipmentsRouter");
const statusTransaction = require("./shipmentsRouter");
const cart = require("./cart");
const discountsRouter = require("./discountsRouter");
const login = require("./authLogin");
const orderRouter = require("./orderRouter");
const AuthGuard = require('../middleware/auth')

app.use("/login", login);
app.use("/images", AuthGuard, imageRouter);
app.use("/products", AuthGuard, productsRouter);
app.use("/users", AuthGuard, userRouter);
app.use("/wishlist", AuthGuard, wishlist);
app.use("/shipments", AuthGuard, shipments);
app.use("/payments", AuthGuard, payments);
app.use("/status-transaction", AuthGuard, statusTransaction);
app.use("/carts", AuthGuard, cart);
app.use("/discounts", AuthGuard, discountsRouter);
app.use("/order", AuthGuard, orderRouter);

module.exports = app;
