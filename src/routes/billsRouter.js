const express = require('express');
const router = express.Router();
const billsController = require('../controller/billsController');

router.get('/', billsController.fetchAll);

router.post('/', billsController.create);

router.delete('/:id', billsController.remove);

module.exports = router