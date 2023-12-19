const mongoose = require('mongoose');

const Payment = mongoose.model('Payment', {
  transactionId: String,
  amount: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = Payment;
