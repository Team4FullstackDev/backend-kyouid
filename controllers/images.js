const { Image_Products } = require('../db/models');

module.exports.saveImagesToDatabase = async (req, res, next) => {
	try {
		const body = req.body;
		const thumbnailFiles = req.files['thumbnail'];
		const imageFiles = req.files['image'];

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
		const image = imageFiles.map((file) => file.filename);

		const result = await Image_Products.create({
			image: image,
			thumbnail: thumbnail.path,
			productsId: body.productsId,
		});
		res.status(201).json({
			message: 'Image uploaded successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

module.exports.getAllImages = async (req, res) => {
	try {
		const images = await Image_Products.findAll();
		res.json(images);
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
};

module.exports.deleteImage = async (req, res) => {
	try {
		const { id } = req.params;
		const image = await Image_Products.findOne({ where: { id } });
		if (!image) return res.status(404).send('Image not found');

		await Image_Products.destroy({ where: { id } });
		res.send('Image deleted successfully!');
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
};
