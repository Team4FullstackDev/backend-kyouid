const { Users } = require('../db/models');
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../util/generateToken');
require('dotenv').config();

// * check user is login
const guardUser = async (req, res, next) => {
	let token = req.headers['Authorization'] || req.headers['authorization'];

	if (!token || !token.startsWith('Bearer')) {
		return res.status(401).json({
			message: 'Authorization header is missing or format not valid.',
		});
	}

	if (!req.session.user) {
		return res.status(401).json({
			message: 'User not found or null please login again.',
		});
	}

	token = token.slice(7);

	// * verify token Refresh
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err && err.message === 'jwt expired') {
			// * Reload new token if token expired
			req.session.tokenAccess = generateAccessToken({
				id: req.session.user.id,
				email: req.session.user.email,
				isAdmin: req.session.user.isAdmin,
			});
			console.log('token updated \n');
		} else if (err) {
			return res.status(401).json({ message: 'Invalid token.' });
		}
	});

	// * check user in database
	const user = await Users.findOne({
		where: {
			id: req.session.user.id,
		},
	});

	if (!user) {
		return res.status(401).json({
			message: 'User with token not found or null please login again.',
		});
	}

	// * verify token Access if token expired logout session
	try {
		jwt.verify(user.tokenRefresh, process.env.REFRESH_TOKEN_SECRET);
		await Users.update(
			{
				tokenAccess: req.session.tokenAccess,
			},
			{
				where: {
					id: req.session.user.id,
				},
			}
		);
		next();
	} catch (err) {
		if (err.message === 'jwt expired') {
			req.session.destroy(req.sessionID);
			return res.status(401).json({ message: 'Refresh token expired.' });
		} else if (err) {
			return res.status(401).json({ message: 'Invalid token.', error: err });
		}
	}
};

// * Guard User for privilages admin

const guardAdmin = async (req, res, next) => {
	const verifyTokenAdmin = jwt.verify(
		req.session.tokenAccess,
		process.env.ACCESS_TOKEN_SECRET
	);
	if (verifyTokenAdmin.isAdmin) {
		next();
	} else {
		return res.status(401).json({ message: 'Your Not Admin' });
	}
};
module.exports = {
	guardUser,
	guardAdmin,
};
