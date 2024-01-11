const express = require('express');
const router = express.Router();

const {
	getProducts,
	getProductsById,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductsByCategory,
	handleUploadImages,
} = require('../controllers/products');
const { saveImagesToDatabase } = require('../controllers/images');

// * Product Router
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
