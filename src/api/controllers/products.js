const { Products, Image_Products } = require('../db/models');
const fs = require('fs');
const convert = require('../../../util/convertBase64');

module.exports.getProducts = async (req, res, next) => {
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
			data: {
				products: products,
			},
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

module.exports.createProduct = async (req, res, next) => {
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

		const thumbnailFiles = req.files['thumbnail'];
		const imageFiles = req.files['image'];

		if (!product.id) {
			return res.status(404).send('Product not found');
		}

		if (
			!thumbnailFiles ||
			!imageFiles ||
			thumbnailFiles.length === 0 ||
			imageFiles.length === 0
		) {
			console.log('upload image');
			return res.status(400).send('Please upload an image');
		}

		const thumbnail = thumbnailFiles[0];
		const image = imageFiles.map((file) => file.path);

		const imageProduct = await Image_Products.create({
			image: image,
			thumbnail: thumbnail.path,
			productsId: product.id,
		});
		res.status(200).json({
			message: 'Product was created successfully',
			data: [{ product, image: imageProduct }],
		});
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

module.exports.deleteProduct = async (req, res, next) => {
	const product = await Products.findOne({
		where: {
			id: req.params.id,
		},
	});

	const findImage = await Image_Products.findAll({
		where: {
			productsId: req.params.id,
		},
	});

	if (!product) {
		return res.status(404).json({ message: 'Product not found' });
	}

	try {
		await Products.destroy({
			where: {
				id: req.params.id,
			},
		});

		findImage.map((image) => {
			const listImage = convert(image.image).map((item) => item);
			for (let i = 0; i < listImage.length; i++) {
				fs.unlink(listImage[i], (err) => {
					if (err) {
						console.error(err);
						return;
					}
				});
				console.log('File berhasil di hapus');
			}
		});

		await Image_Products.destroy({
			where: {
				productsId: req.params.id,
			},
		});

		return res
			.status(200)
			.json({ message: 'Product Success deleted', data: product.title });
	} catch (error) {
		next(error);
	}
};
