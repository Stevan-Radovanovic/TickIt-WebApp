const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users');
const sportEventRoutes = require('./routes/sportEvents');

const app = express();

mongoose
  .connect(
    'mongodb+srv://stevan:Stevan.1@tickitcluster-trhkx.mongodb.net/tick-it?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(() => {
    console.log('Connection to the database failed');
  });

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.send('Server started');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  );
  next();
});

app.use('/users', userRoutes);
app.use('/sportEvents', sportEventRoutes);

module.exports = app;
