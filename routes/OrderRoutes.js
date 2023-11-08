const express = require('express');
const OrderModel = require('../models/OrderModel');
const Uder = require('../models/UserModel')
const router = express.Router();

// POST: Create a new order
router.post('/', async (req, res) => {
  try {
    const {
      waterLevel,
      chemicalsLevel01,
      chemicalsLevel02,
      fabric,
      pressureLevel,
      reservationDate,
      reservationTime,
      pieces,
      userId
    } = req.body;

    const newOrder = new OrderModel({
      waterLevel,
      chemicalsLevel01,
      chemicalsLevel02,
      fabric,
      pressureLevel,
      reservationDate,
      reservationTime,
      pieces,
      userId
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Error creating order' });
  }
});

router.get('/all-orders',  async (req, res) => {
  try {
    const orders = await OrderModel.find().populate('userId').exec();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders with user details' });
  }
});

// GET: Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

router.post('/create-payment', async (req, res) => {
  const { amount, currency, paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
    });

    // Payment was successful, respond to the client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    // Payment failed, respond with an error
    res.status(400).json({ error: error.message });
  }
});

router.post('/process-payment', async (req, res) => {
  try {
    // Process the payment with Stripe

    // If payment is successful
    res.status(200).json({ message: 'Payment Successful' });
  } catch (error) {
    res.status(500).json({ error: 'Payment Failed' });
  }
});

router.get('/:orderId',  async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await OrderModel.findById(orderId).exec();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order details' });
  }
});

// router.get('/:orderId',  async (req, res) => {
//   try {
//     const orderId = req.params.orderId;
//     const order = await OrderModel.findById(orderId).exec();
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching order details' });
//   }
// });

//  router.get('/user/:userId',  async (req, res) => {
//    try {
//      const userId = req.params.userId;
//      const orders = await OrderModel.find({ userId }).exec();
//      res.json(orders);
//    } catch (error) {
//      res.status(500).json({ message: 'Error fetching user orders' });
//    }
//  });
//

router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await OrderModel.find({ userId }).exec();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: `Error fetching user orders: ${error.message}` });
  }
});



// DELETE: Delete a specific order by ID
router.delete('/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await OrderModel.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Error deleting order' });
  }
});

router.put('/:id', async (req, res) => {
  const orderId = req.params.id;
  const { state } = req.body;

  try {
    const order = await OrderModel.findById(orderId);
    if (order) {
      order.state = state;
      await order.save();
      res.json({ message: 'Order state updated successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error('Error updating order state:', error);
    res.status(500).json({ message: 'Error updating order state' });
  }
});

module.exports = router;