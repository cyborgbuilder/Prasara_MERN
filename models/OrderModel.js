const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  waterLevel: {
    type: String,
    required: true,
  },
  chemicalsLevel01: {
    type: String,
    required: true,
  },
  chemicalsLevel02: {
    type: String,
    required: true,
  },
  fabric: {
    type: String,
    required: true,
  },
  pressureLevel: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  pieces: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: 'queue',
    required: true,
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;