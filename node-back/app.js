const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.send('Server started');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  );
  next();
});

app.use('/users', userRoutes);

module.exports = app;
