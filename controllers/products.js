const User = require('../models/users');
const home = (req, res, next) => {
	res.send('<h1>INI API</h1>');
};

const create = async (req, res, next) => {
	try {
		const { fullName, email, password, isAdmin, birthDate, phoneNumber } =
			req.body;

		const result = await User.create({
			fullName: fullName,
			email: email,
			password: password,
			birthDate: new Date(birthDate),
			phoneNumber: phoneNumber,
			isAdmin: isAdmin,
		});

		return res.status(200).json({
			message: 'Berhasil',
			data: result,
		});
	} catch (error) {
		return res.status(400).json({
			message: error.message,
		});
	}
};

const getAll = async (req, res, next) => {
	try {
		const result = await User.findAll();
		return res.status(200).json({
			message: 'Berhasil',
			data: result,
		});
	} catch (error) {
		return res.status(400).json({
			message: error.message,
		});
	}
};

module.exports = { home, create, getAll };
