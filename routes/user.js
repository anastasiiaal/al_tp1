const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, deleteUser } = require('../service/userService');

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

router.get('/all', async (req, res) => {
    try {
        const users = await getAllUsers();
        console.log('Utilisateurs récupérés avec succès:', users);
        res.status(200).json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error.message);
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Suppression de l'utilisateur avec l'ID : ${id}`);

        const result = await deleteUser(id);

        console.log(result.message);
        res.status(200).json(result);
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error.message);
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
    }
})

module.exports = router;
