const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/', (req, res) => {
    res.send('Hello, world!');
});

module.exports = router;
