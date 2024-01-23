const express = require('express');
const router = express.Router();

const shipmentController = require('../controllers/shipments');

router.get('/', shipmentController.getShipments);
router.get('/:id', shipmentController.getShipmentsById);
router.post('/', shipmentController.createShipment);
router.put('/:id', shipmentController.updateShipment);
router.delete('/:id', shipmentController.deleteShipment);

module.exports = router;
