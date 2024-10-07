const UserDTO = require('../dto/UserDTO');

async function getAllUsers(userRepository) {
    try {
        const users = await userRepository.findAll();
        return users.map(user => UserDTO.fromUser(user));  // Convertir chaque utilisateur en DTO
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        throw new Error('Erreur lors de la récupération des utilisateurs');
    }
}

module.exports = getAllUsers;
