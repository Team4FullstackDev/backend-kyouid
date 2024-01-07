const { Discounts } = require('../db/models');
const home = (req, res, next) => {
	res.send('<h1>INI API</h1>');
};

const createUser = async (req, res, next) => {
	try {
		const body = req.body;

		console.log(body);

		const result = await Discounts.create(body);

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

module.exports = { home, createUser, getAll };
