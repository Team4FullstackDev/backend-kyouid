const express = require('express');
const router = express.Router();

const { uploadProducts } = require('../middleware/multer');
const { saveImagesToDatabase, getAllImages } = require('../controllers/images');

// image Router
router.get('/products', getAllImages);
// router.post(
// 	'/products',
// 	uploadProducts.fields([
// 		{ name: 'thumbnail', maxCount: 1 },
// 		{ name: 'image', maxCount: 10 },
// 	]),
// 	saveImagesToDatabase
// );

module.exports = router;
