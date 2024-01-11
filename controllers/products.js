const { Products, Image_Products } = require('../db/models');

module.exports.getProducts = async (req, res) => {
	try {
		const { status, category, character, series } = req.query;
		const whereClause = {};
		if (status) whereClause.status = status;
		if (category) whereClause.category = category;
		if (character) whereClause.character = character;
		if (series) whereClause.series = series;
		const products = await Products.findAll({
			include: [
				{
					model: Image_Products,
					attributes: ['image', 'productsId', 'thumbnail'],
				},
			],
			where: whereClause,
		});
		res.status(200).json({
			message: 'Get products successfully',
			data: products,
		});
	} catch (error) {
		next(error);
	}
};
module.exports.getProductsById = async (req, res) => {
	try {
		const product = await Products.findOne({
			include: [
				{
					model: Image_Products,
					attributes: ['image'],
				},
			],
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			message: 'Get products successfully',
			data: product,
		});
	} catch (error) {
		next(error);
	}
};

module.exports.createProduct = async (req, res) => {
	try {
		const {
			status,
			title,
			price,
			description,
			minimumCredits,
			stock,
			category,
			series,
			character,
			manufacture,
		} = req.body;
		const product = await Products.create({
			status,
			title,
			price,
			description,
			minimumCredits,
			stock,
			category,
			series,
			character,
			manufacture,
		});
		res
			.status(200)
			.json({ message: 'Product was created successfully', data: product });
	} catch (error) {
		next(error);
	}
};

module.exports.updateProduct = async (req, res) => {
	try {
		const {
			status,
			title,
			price,
			description,
			minimumCredits,
			stock,
			category,
			series,
			character,
			manufacture,
		} = req.body;

		if (!req.params.id) {
			return res.status(404).json({ message: 'Id Not found' });
		}

		const product = await Products.findOne({ where: { id: req.params.id } });

		if (!product) {
			return res
				.status(404)
				.json({ message: 'Product not found', id: req.params.id });
		}

		await product.update({
			status,
			title,
			price,
			description,
			minimumCredits,
			stock,
			category,
			series,
			character,
			manufacture,
		});

		res.status(200).json({
			message: 'Product and images were updated successfully',
			data: product,
		});
	} catch (error) {
		next(error);
	}
};

module.exports.deleteProduct = async (req, res) => {
	const product = await Products.findOne({
		where: {
			id: req.params.id,
		},
	});
	try {
		await Products.destroy({
			where: {
				id: req.params.id,
			},
		});
		res
			.status(200)
			.json({ message: 'Get products successfully', data: product });
	} catch (error) {
		next(error);
	}
};
