const { Users } = require('../db/models');
const { userDetailAreValid } = require('../util/validation');
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
			],
		});
		res.status(200).json(response);
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

	const userId = await Users.findOne({
		where: {
			email: email,
		},
	});

	if (userId) {
		return res.status(400).json({ message: 'User already exist' });
	}

	try {
		const user = await Users.create({
			fullName: fullName,
			username: username,
			email: email,
			password: await hashPassword(password),
			phoneNumber: phoneNumber,
			birthDate: birthDate,
			isAdmin: isAdmin === true ? 1 : 0,
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
