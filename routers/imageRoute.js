const express = require('express');
const router = express.Router();

const { uploadProducts } = require('../middleware/multer');
const { saveImagesToDatabase } = require('../controllers/images');

// image Router
router.post(
	'/products',
	uploadProducts.fields([
		{ name: 'thumbnail', maxCount: 1 },
		{ name: 'image', maxCount: 10 },
	]),
	saveImagesToDatabase
);

module.exports = router;
