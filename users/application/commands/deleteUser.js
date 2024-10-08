const axios = require('axios');

async function deleteUser(id, userRepository) {
    try {
        const user = await userRepository.findByPk(id);

        if (!user) {
            throw new Error(`Utilisateur avec l'ID ${id} non trouvé.`);
        }

        console.log('Tentative de suppression du BankUser avec l\'ID utilisateur :', id);
        try {
            const bankUserResponse = await axios.delete(`http://localhost:4000/bankUser/delete/${id}`);
            if (bankUserResponse.status === 200) {
                console.log('BankUser supprimé avec succès.');
            } else {
                console.log('Aucun BankUser trouvé ou erreur lors de la suppression du BankUser.');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression du BankUser :', error.message);
        }

        await userRepository.delete(id);
        return { message: 'Utilisateur et BankUser supprimés avec succès' };
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        throw new Error('Erreur lors de la suppression de l\'utilisateur');
    }
}

module.exports = deleteUser;
