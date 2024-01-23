const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discounts');

router.post('/create', discountController.createDiscount);
router.get('/getAll', discountController.getDiscounts);
router.get('/:id', discountController.getDiscountById);
router.put('/:id/update', discountController.updateDiscount);
router.delete('/:id/delete', discountController.deleteDiscount);

// Logging untuk memeriksa apakah rute diakses
// router.use((req, res, next) => {
//     console.log(`Accessed route: ${req.method} ${req.url}`);
//     next();
// }

module.exports = router