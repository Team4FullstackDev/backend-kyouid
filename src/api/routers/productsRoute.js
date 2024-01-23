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
const { guardUser, guardAdmin } = require('../config/security');

// * Product Router
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.post('/', guardUser, guardAdmin, createProduct);
router.patch('/:id', guardUser, guardAdmin, updateProduct);
router.delete('/:id', guardUser, guardAdmin, deleteProduct);

module.exports = router;
