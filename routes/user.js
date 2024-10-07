const express = require('express');
const router = express.Router();
const { createUser } = require('../service/userService');

router.post('/create', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        console.log('Requête reçue pour créer un utilisateur avec les données :', { firstName, lastName, email });

        const user = await createUser(firstName, lastName, email, password);

        console.log('Utilisateur créé avec succès:', user);
        res.status(201).json(user);
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error.message);
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
});

module.exports = router;
