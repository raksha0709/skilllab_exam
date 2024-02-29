const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Route to place an order
router.post('/', async (req, res) => {
  const order = new Order({
    foodId: req.body.foodId,
    userId: req.body.userId,
    orderId: req.body.orderId,
    paymentMode: req.body.paymentMode
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
}
});