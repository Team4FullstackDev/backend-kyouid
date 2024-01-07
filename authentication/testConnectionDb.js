const { Sequelize } = require('sequelize');
const db = require('../config/database');
require('dotenv').config();

let sequelize;
if (process.env.NODE_ENV === 'production') {
	sequelize = new Sequelize(db.production);
} else if (process.env.NODE_ENV === 'development') {
	sequelize = new Sequelize(db.development);
}

const testConnectionDb = async () => {
	try {
		await sequelize.sync();
		console.log('Connection has been established sucess');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

module.exports = testConnectionDb;
