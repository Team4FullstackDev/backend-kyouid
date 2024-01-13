const { Users } = require('../db/models');
const { userLoginAreValid } = require('../util/validation');
const { comparePassword } = require('../util/passwordHash');
const { generateToken } = require('../util/jwt.util');

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

		const token = generateToken({ id: user.id });

		res.status(201).json({
			message: 'User login successfully',
			data: user.email,
			token,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { login };
