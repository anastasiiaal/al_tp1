async function deleteBankUser(userId, bankUserRepository) {
    try {
        const bankUser = await bankUserRepository.findByUserId(userId);
        if (!bankUser) {
            throw new Error('BankUser non trouvé.');
        }

        await bankUserRepository.delete(bankUser.id);
        console.log('BankUser supprimé avec succès.');
        return { message: 'BankUser supprimé avec succès.' };
    } catch (error) {
        console.error('Erreur lors de la suppression du BankUser :', error.message);
        throw new Error('Erreur lors de la suppression du BankUser.');
    }
}

module.exports = deleteBankUser;
