const mongoose = require('mongoose');

const sportEventSchema = mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  password: { type: String, required: true },
  zones: [
    {
      name: { type: String, required: true },
      amount: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('SportEvent', sportEventSchema);
