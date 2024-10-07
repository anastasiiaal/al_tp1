async function updateUser(id, updateData, userRepository) {
    try {
        const user = await userRepository.findByPk(id);

        if (!user) {
            throw new Error(`Utilisateur avec l'ID ${id} non trouvé.`);
        }
        
        await userRepository.update(id, updateData);

        return { message: 'Utilisateur mis à jour avec succès' };
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
        throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
    }
}

module.exports = updateUser;
