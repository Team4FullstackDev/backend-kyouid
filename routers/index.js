const express = require('express');
const app = express.Router();

const imageRouter = require('./imageRoute');
const productsRouter = require('./productsRoute');
const userRouter = require('./usersRoute');
const wishlist = require('./wishlist');
const shipments = require('./shipmentsRouter');
const payments = require('./shipmentsRouter');
const statusTransaction = require('./shipmentsRouter');
const cart = require('./cart');
const discountsRouter = require('./discountsRouter');
const routerAuth = require('./authLogin');
const orderRouter = require('./orderRouter');
const { guardUser, guardAdmin } = require('../config/security');
const { home } = require('../controllers/home');

app.use('/', routerAuth);
app.use('/images', guardUser, guardAdmin, imageRouter);
app.use('/products', guardUser, guardAdmin, productsRouter);
app.use('/users', userRouter);
app.use('/wishlist', guardUser, guardAdmin, wishlist);
app.use('/shipments', guardUser, guardAdmin, shipments);
app.use('/payments', guardUser, guardAdmin, payments);
app.use('/status-transaction', guardUser, guardAdmin, statusTransaction);
app.use('/carts', guardUser, guardAdmin, cart);
app.use('/discounts', guardUser, guardAdmin, discountsRouter);
app.use('/order', guardUser, guardAdmin, orderRouter);
// app.use('/', home);

module.exports = app;
