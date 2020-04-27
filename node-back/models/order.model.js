const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  email: { type: String, required: true },
  eventName: { type: String, required: true },
  ticket: { type: String, required: true },
  amount: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
