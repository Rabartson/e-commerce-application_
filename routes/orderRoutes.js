
const express = require('express');
const {
  placeOrder,
  getOrderById,
  getUserOrders,
  cancelOrder,
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Order routes
router.post('/', protect, placeOrder);
router.get('/:id', protect, getOrderById);
router.get('/', protect, getUserOrders);
router.delete('/:id', protect, cancelOrder);

module.exports = router;
