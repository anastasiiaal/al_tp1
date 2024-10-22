const express = require('express');
const router = express.Router();
const bankAccountController = require('../controllers/bankAccountController');

router.post('/create', bankAccountController.createBankAccountController);
router.get('/:id', bankAccountController.getBankAccountController);

module.exports = router;
