const express = require('express');
const router = express.Router();
const { createShipment, getMyShipments, updateShipmentStatus } = require('../controllers/shipmentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createShipment).get(protect, getMyShipments);
router.route('/:id').put(protect, updateShipmentStatus);

module.exports = router;
