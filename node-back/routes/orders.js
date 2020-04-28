const express = require('express');
const Order = require('../models/order.model');

const router = express.Router();

router.post('/', (req, res, next) => {
  const order = new Order({
    email: req.body.email,
    date: req.body.date,
    ticket: req.body.ticket,
    amount: req.body.amount,
    eventName: req.body.eventName,
  });
  order
    .save()
    .then((response) => {
      res.status(201).json({
        message: 'Created an Order',
      });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Errorche: ' + err });
    });
});

router.get('/mail', (req, res, next) => {
  console.log(req.query.mail);
  Order.find({ email: req.query.mail })
    .then((orders) => {
      console.log(orders);
      if (orders === []) {
        return res
          .status(404)
          .json({ orders: null, message: 'No orders so far!' });
      }

      res.status(200).json({ orders: orders, message: "We've found orders!" });
    })
    .catch((err) => {
      res.status(401).json({ orders: null, message: 'Error alert' });
    });
});

module.exports = router;
