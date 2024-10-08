const express = require('express');
const router = express.Router();
const bankUserController = require('../controllers/bankUserController');

router.get('/:id', bankUserController.getBankUserController);

module.exports = router;
