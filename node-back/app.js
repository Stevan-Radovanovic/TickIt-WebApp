const express = require('express');
const bodyParser = require('body-parser');

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

//Getting Sports Events
app.get('/sportEvents', (req, res, next) => {
  const events = 'This should be an array from the db';
  res.send({ message: 'Fetch all sport events in the DB', events: events });
});

module.exports = app;
