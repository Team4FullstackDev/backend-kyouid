const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAccessToken = ({ ...user }) => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
};

const generateRefreshToken = ({ ...user }) => {
	return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3d' });
};

module.exports = {
	generateAccessToken,
	generateRefreshToken,
};