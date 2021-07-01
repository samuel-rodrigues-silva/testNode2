const express = require('express');
const router = express.Router();
const billsController = require('../controller/billsController');

router.get('/:id', billsController.fetch);

router.post('/', billsController.create);

router.delete('/:id', billsController.remove);

module.exports = router