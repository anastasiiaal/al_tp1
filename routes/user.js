const express = require('express');
const router = express.Router();
const { createUser } = require('../service/userService');

router.post('/create', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const user = await createUser(firstName, lastName, email, password);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
