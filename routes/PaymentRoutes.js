const express = require('express');
const Payment = require('../models/PaymentModel');

const router = express.Router();

// GET endpoint to fetch all payment data
router.get('/api/payments', async (req, res) => {
  try {
    const payments = await Payment.find(); // Retrieve all payments from the database
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payment data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST endpoint to handle PayPal webhook
router.post('/api/paypal-webhook', async (req, res) => {
  try {
    const { id, amount } = req.body.purchase_units[0].payments.captures[0];

    // Store payment data in MongoDB
    const payment = new Payment({
      transactionId: id,
      amount: amount.value,
    });

    await payment.save();
    res.sendStatus(200); // Send a success response to PayPal
  } catch (error) {
    console.error('Error storing payment data:', error);
    res.sendStatus(500); // Send an error response to PayPal
  }
});

module.exports = router;
