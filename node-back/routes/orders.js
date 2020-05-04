const express = require('express');
const OrderController = require('../controllers/order-controller');

const router = express.Router();

router.post('/', OrderController.PostOrders);
router.get('/mail', OrderController.GetOrders);

module.exports = router;
