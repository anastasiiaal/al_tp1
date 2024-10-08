const express = require('express');
const router = express.Router();
const bankUserController = require('../controllers/bankUserController');

router.get('/:id', bankUserController.getBankUserController);
router.post('/create', bankUserController.createBankUserController);

module.exports = router;
