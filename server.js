const express = require('express');
require('dotenv').config();

const routers = require('./routers/index');
const testConnectionDb = require('./authentication/testConnectionDb');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4001;

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * routers
app.use(routers);

app.listen(PORT, () => {
	console.log(`server runnnig http://localhost:${PORT}`);
	testConnectionDb();
});
