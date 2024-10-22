async function getBankUserWithAccounts(bankUserId, bankUserRepository) {
    try {
        const bankUser = await bankUserRepository.getUserWithAccounts(bankUserId);
        if (!bankUser) {
            throw new Error('BankUser non trouvé.');
        }

        console.log('BankUser trouvé avec succès:', bankUser);
        return bankUser;
    } catch (error) {
        console.error('Erreur lors de la récupération du BankUser et des BankAccounts:', error.message);
        throw new Error('Erreur lors de la récupération du BankUser et des BankAccounts.');
    }
}

module.exports = getBankUserWithAccounts;
