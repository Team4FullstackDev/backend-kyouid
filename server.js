const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const routers = require('./routers');
const testConnectionDb = require('./authentication/testConnectionDb');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/handleError');
const sessionConfig = require('./util/sessionConfig');

const app = express();
const PORT = process.env.PORT || 9001;

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
		optionsSuccessStatus: 204,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './upload/public')));
app.use(express.static(path.join(__dirname, './public/products')));

// * Config Session
app.use(sessionConfig());

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
