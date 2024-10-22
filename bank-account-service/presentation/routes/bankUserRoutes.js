const express = require('express');
const router = express.Router();
const bankUserController = require('../controllers/bankUserController');

router.get('/:id', bankUserController.getBankUserController);
router.get('/:id/accounts', bankUserController.getBankUserWithAccountsController);
router.post('/create', bankUserController.createBankUserController);
router.delete('/delete/:userId', bankUserController.deleteBankUserController);

module.exports = router;
