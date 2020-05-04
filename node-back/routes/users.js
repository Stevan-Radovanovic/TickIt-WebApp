const express = require('express');
const UserController = require('../controllers/user-controller');

const router = express.Router();

router.get('/signup', UserController.TestSignUp);
router.post('/signup', UserController.SignUp);
router.post('/login', UserController.LogIn);

module.exports = router;
