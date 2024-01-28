const session = require('express-session');
const SequalizeStore = require('connect-session-sequelize')(session.Store);
const { Sequelize } = require('sequelize');
const database = require('../src/api/config/database');
require('dotenv').config();

const sequalize = new Sequelize(database.development);

const store = new SequalizeStore({
	db: sequalize,
});

// store.sync();

const configSession = () => {
	return session({
		secret: process.env.SECRET_SESSION,
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	});
};

module.exports = configSession;
