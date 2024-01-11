const express = require('express');
require('dotenv').config();
const path = require('path');
const morgan = require('morgan');

const routers = require('./routers');
const testConnectionDb = require('./authentication/testConnectionDb');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/handleError');

const app = express();
const PORT = process.env.PORT || 9001;

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'upload/public/products')));

// * routers
app.use(routers);

// * Error Routing Not Found
app.use(notFound);

// * Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`server runnnig http://localhost:${PORT}`);
	testConnectionDb();
});
