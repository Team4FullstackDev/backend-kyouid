const express = require("express");
const app = express.Router();

const imageRouter = require("./imageRoute");
const productsRouter = require("./productsRoute");
const userRouter = require("./usersRoute");
const wishlist = require("./wishlist");
const shipments = require("./shipmentsRouter");
const cart = require("./cart");
const discountsRouter = require("./discountsRouter");
const login = require("./authLogin");
const orderRouter = require("./orderRouter");
const { home } = require("../controllers/users");

// app.use("/", home);
app.post("/login", login);
app.use("/images", imageRouter);
app.use("/products", productsRouter);
app.use("/users", userRouter);
app.use("/wishlist", wishlist);
app.use("/shipments", shipments);
app.use("/carts", cart);
app.use("/discounts", discountsRouter);
app.use("/order", orderRouter);

module.exports = app;
