const express = require('express');
const SportEventController = require('../controllers/sportEvent-controller');

const router = express.Router();

router.get('/', SportEventController.GetSportEvents);
router.post('/', SportEventController.PostEvent);

module.exports = router;
