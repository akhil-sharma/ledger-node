var express = require('express');
var router = express.Router();

var transaction = require('../models/transactions');

router.get('/test', transaction.test);

module.exports = router;