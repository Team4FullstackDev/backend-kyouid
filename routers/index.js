const express = require('express');
const app = express.Router();

const imageRouter = require('./imageRoute');
const productsRouter = require('./productsRoute');
const userRouter = require('./usersRoute');

app.use('/images', imageRouter);
app.use('/products', productsRouter);
app.use('/users', userRouter);

module.exports = app;
