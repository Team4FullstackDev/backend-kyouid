const lodash = require('lodash')
const { Users } = require('../db/models');
const {
	userLoginAreValid,
	userDetailAreValid,
} = require('../../../util/validation');
const { comparePassword } = require('../../../util/passwordHash');
const {
	generateAccessToken,
	generateRefreshToken,
} = require('../../../util/generateToken');

const login = async (req, res, next) => {
	const { username, password } = req.body;

	if (!userLoginAreValid(username, password)) {
		return res.status(400).json({ message: 'All fields are required' });
	}

	try {
		let user;
		if (username.includes('@')) {
			user = await Users.findOne({
				where: {
					email: username,
				},
			});
		} else {
			user = await Users.findOne({
				where: {
					username: username,
				},
			});
		}

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const comparePasswordUser = await comparePassword(password, user.password);

		if (!comparePasswordUser) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		const accessToken = generateAccessToken({
			id: user.id,
			email: user.name,
			isAdmin: user.isAdmin,
		});

		const refreshToken = generateRefreshToken({
			id: user.id,
			email: user.name,
			isAdmin: user.isAdmin,
		});

		await Users.update(
			{
				tokenAccess: accessToken,
				tokenRefresh: refreshToken,
			},
			{
				where: {
					id: user.id,
				},
			}
		);

		req.session.user = {
			id: user.id,
			email: user.email,
			isAdmin: user.isAdmin,
		};
		req.session.tokenAccess = accessToken;
		req.session.tokenRefresh = refreshToken;

		res.status(201).json({
			message: 'User login successfully',
			accessToken: accessToken,
			refreshToken: refreshToken,
			user: lodash.pick(user, ['id', 'username']) 
		});
	} catch (error) {
		next(error);
	}
};

const logout = (req, res, next) => {
	if (!req.session.user) {
		return res.status(401).json({
			message: 'User not found or null please login again.',
		});
	}

	const user = Users.update(
		{
			tokenAccess: null,
			tokenRefresh: null,
		},
		{
			where: {
				id: req.session.user.id,
			},
		}
	);

	if (!user) {
		return res.status(401).json({
			message: 'credentials not valid',
		});
	}

	if (req.session.user.id) {
		req.session.destroy(req.sessionID);
		return res.status(200).json({ message: 'Logout successfully' });
	}
};

module.exports = { login, logout };
