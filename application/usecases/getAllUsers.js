async function getAllUsers(userRepository) {
    try {
        const users = await userRepository.findAll();
        return users;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        throw new Error('Erreur lors de la récupération des utilisateurs');
    }
}

module.exports = getAllUsers;
