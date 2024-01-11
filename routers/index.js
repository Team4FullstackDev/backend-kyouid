const express = require('express');
const app = express.Router();

const imageRouter = require('./imageRoute');
const productsRouter = require('./productsRoute');
const userRouter = require('./usersRoute');
const wishlist = require('./wishlist');
const shipments = require('./shipmentsRouter');
const cart = require('./cart');

app.use('/images', imageRouter);
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/wishlist', wishlist);
app.use('/shipments', shipments);
app.use('/carts', cart);

module.exports = app;
