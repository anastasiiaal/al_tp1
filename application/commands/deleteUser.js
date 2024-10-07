async function deleteUser(id, userRepository) {
    try {
        const user = await userRepository.findByPk(id);

        if (!user) {
            throw new Error(`Utilisateur avec l'ID ${id} non trouvé.`);
        }

        // Supprimer l'utilisateur via le repository
        await userRepository.delete(id);
        return { message: 'Utilisateur supprimé avec succès' };
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        throw new Error('Erreur lors de la suppression de l\'utilisateur');
    }
}

module.exports = deleteUser;
