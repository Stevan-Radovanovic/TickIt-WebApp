const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = null; //make user
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'User created',
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
