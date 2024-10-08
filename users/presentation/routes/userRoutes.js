const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUserController);
router.get('/all', userController.getAllUsersController);
router.delete('/:id', userController.deleteUserController);
router.patch('/update/:id', userController.updateUserController);

module.exports = router;
