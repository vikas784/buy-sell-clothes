const Order = require('../models/Order');
const { orderValidation } = require('../validation/orderValidation');

// @desc    Create a new order
// @route   POST /api/orders
// @access  Public
const createOrder = async (req, res) => {
  const { error } = orderValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { items, total, deliveryOption, customerName, phoneNumber } = req.body;

  try {
    const newOrder = new Order({
      items,
      total,
      deliveryOption,
      customerName,
      phoneNumber
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createOrder
};