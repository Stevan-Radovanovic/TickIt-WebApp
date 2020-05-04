const SportEvent = require('../models/sportEvent.model');

exports.GetSportEvents = (req, res, next) => {
  SportEvent.find().then((documents) => {
    res.status(200).json({ documents: documents });
  });
};

exports.PostEvent = (req, res, next) => {
  const event = new SportEvent({
    name: req.body.name,
    date: req.body.date,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    zones: req.body.zones,
  });
  event
    .save()
    .then((response) => {
      res.status(201).json({
        message: 'Created a Sport Event',
      });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error: ' + err });
    });
};
