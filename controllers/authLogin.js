const { Users } = require('../db/models');
const { userLoginAreValid } = require('../util/validation');
const { comparePassword } = require('../util/passwordHash');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
	const { email, username, password } = req.body;
	if (userLoginAreValid(username, password)) {
		return res.status(400).json({ message: 'All fields are required' });
	}

	try {
		const user = await Users.findOne({
			where: {
				username: username,
				email: email,
			},
		});

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const comparePasswordUser = comparePassword(password, user.password);

		if (!comparePasswordUser) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		res.status(201).json({
			message: 'User login successfully',
			data: user.email,
		});
	} catch (error) {
		next(error);
	}
};

// module.exports.login = async (req, res) => {
// 	try {
// 		const images = await Image_Products.findAll();
// 		res.json(images);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send('Internal Server Error');
// 	}
// };

module.exports = { login };
