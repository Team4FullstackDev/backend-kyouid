const { Users } = require('../db/models');
const { Op } = require('sequelize');
const {
	userDetailAreValid,
	checkUppercase,
	checkwhiteSpace,
} = require('../util/validation');
const { hashPassword } = require('../util/passwordHash');

module.exports.home = (req, res, next) => {
	res.send('<h1>INI API</h1>');
};

module.exports.getUsers = async (req, res, next) => {
	try {
		const response = await Users.findAll({
			attributes: [
				'id',
				'fullName',
				'username',
				'email',
				'phoneNumber',
				'isAdmin',
				'tokenRefresh',
			],
		});
		res.status(200).json({
			message: 'Get All User Success',
			data: {
				response,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports.getUsersById = async (req, res, next) => {
	try {
		const response = await Users.findOne({
			attributes: [
				'id',
				'fullName',
				'username',
				'email',
				'phoneNumber',
				'isAdmin',
			],
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports.createUser = async (req, res, next) => {
	const {
		fullName,
		username,
		email,
		password,
		phoneNumber,
		birthDate,
		isAdmin,
	} = req.body;

	if (checkUppercase(username)) {
		return res.status(400).json({ message: 'username must be lowercase' });
	} else if (checkUppercase(email)) {
		return res.status(400).json({ message: 'email must be lowercase' });
	} else if (checkwhiteSpace(username)) {
		return res
			.status(400)
			.json({ message: 'username must not have white space' });
	} else if (checkwhiteSpace(email)) {
		return res.status(400).json({ message: 'email must not have white space' });
	}

	if (
		!userDetailAreValid(
			fullName,
			username,
			email,
			password,
			phoneNumber,
			birthDate
		)
	) {
		return res.status(400).json({ message: 'Invalid data' });
	}

	const existingUser = await Users.findOne({
		where: {
			[Op.or]: [
				{
					username: username,
				},
				{
					email: email,
				},
			],
		},
	});

	if (existingUser) {
		if (existingUser.username === username && existingUser.email === email) {
			return res
				.status(400)
				.json({ message: 'username and email already exists' });
		} else if (existingUser.username === username) {
			return res.status(400).json({ message: 'username already exists' });
		} else if (existingUser.email === email) {
			return res.status(400).json({ message: 'email already exists' });
		}
	}

	try {
		const user = await Users.create({
			fullName: fullName,
			username: username,
			email: email,
			password: await hashPassword(password),
			phoneNumber: phoneNumber,
			birthDate: birthDate,
			isAdmin: isAdmin,
		});
		res
			.status(201)
			.json({ message: 'User was created successfully', data: user });
	} catch (error) {
		next(error);
	}
};

module.exports.updateUser = async (req, res, next) => {
	try {
		const user = await Users.findOne({
			where: {
				id: req.params.id,
			},
		});

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const {
			fullName,
			username,
			email,
			password,
			phoneNumber,
			birthDate,
			isAdmin,
		} = req.body;

		if (checkUppercase(username)) {
			return res.status(400).json({ message: 'username must be lowercase' });
		} else if (checkUppercase(email)) {
			return res.status(400).json({ message: 'email must be lowercase' });
		} else if (checkwhiteSpace(username)) {
			return res
				.status(400)
				.json({ message: 'username must not have white space' });
		} else if (checkwhiteSpace(email)) {
			return res
				.status(400)
				.json({ message: 'email must not have white space' });
		}

		if (
			!userDetailAreValid(
				fullName,
				username,
				email,
				password,
				phoneNumber,
				birthDate
			)
		) {
			return res.status(400).json({ message: 'Check your user detail' });
		}

		const existingUser = await Users.findOne({
			where: {
				[Op.or]: [
					{
						username: username,
					},
					{
						email: email,
					},
				],
			},
		});

		if (existingUser) {
			if (existingUser.username === username && existingUser.email === email) {
				return res
					.status(400)
					.json({ message: 'username and email already exists' });
			} else if (existingUser.username === username) {
				return res.status(400).json({ message: 'username already exists' });
			} else if (existingUser.email === email) {
				return res.status(400).json({ message: 'email already exists' });
			}
		}

		const result = await Users.update(
			{
				fullName: fullName,
				username: username,
				email: email,
				password: await hashPassword(password),
				phoneNumber: password,
				birthDate: birthDate,
				isAdmin: isAdmin ? null : false,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);
		res
			.status(200)
			.json({ message: 'User was updated successfully', data: result });
	} catch (error) {
		next(error);
	}
};

module.exports.deleteUser = async (req, res, next) => {
	try {
		const user = await Users.findOne({
			where: {
				id: req.params.id,
			},
		});
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		await Users.destroy({
			where: {
				id: req.params.id,
			},
		});
		res
			.status(200)
			.json({ message: 'User was deleted successfully', id: req.params.id });
	} catch (error) {
		next(error);
	}
};
