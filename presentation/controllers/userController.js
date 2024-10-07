const createUser = require('../../application/commands/createUser');
const getAllUsers = require('../../application/queries/getAllUsers');
const deleteUser = require('../../application/commands/deleteUser');
const updateUser = require('../../application/commands/updateUser');

const userRepository = require('../../persistence/repositories/userRepository');
const profileRepository = require('../../persistence/repositories/profileRepository');

async function createUserController (req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await createUser({ firstName, lastName, email, password }, userRepository, profileRepository);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
};

async function getAllUsersController (req, res) {
    try {
        const users = await getAllUsers(userRepository);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
};

async function deleteUserController (req, res) {
    try {
        const { id } = req.params;
        const result = await deleteUser(id, userRepository);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

async function updateUserController (req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await updateUser(id, updateData, userRepository);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { createUserController, getAllUsersController, deleteUserController, updateUserController };
