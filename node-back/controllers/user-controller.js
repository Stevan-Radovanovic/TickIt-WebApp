const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.TestSignUp = (req, res, next) => {
  console.log('Sign Up page works');
  res.end();
};

exports.SignUp = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({ email: req.body.email, password: hash });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: 'User created',
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Sign Up Failed' });
      });
  });
};

exports.LogIn = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'Log In failed',
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: 'Log In failed',
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, id: fetchedUser._id },
        'secret',
        {
          expiresIn: '1h',
        }
      );

      res.status(200).json({
        token: token,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: 'Log In failed',
      });
    });
};
