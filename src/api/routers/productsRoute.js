const express = require('express');
const router = express.Router();

const {
	getProducts,
	getProductsById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/products');
const { uploadProducts } = require('../middleware/multer');
const { guardUser, guardAdmin } = require('../config/security');

// * Product Router
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.post(
	'/',
	guardUser,
	guardAdmin,
	uploadProducts.fields([
		{ name: 'thumbnail', maxCount: 1 },
		{ name: 'image', maxCount: 10 },
	]),
	createProduct
);
router.patch('/:id', guardUser, guardAdmin, updateProduct);
router.delete('/:id', guardUser, guardAdmin, deleteProduct);

module.exports = router;
