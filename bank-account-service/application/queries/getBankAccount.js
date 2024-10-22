async function getBankAccount(accountId, bankAccountRepository) {
    try {
        const bankAccount = await bankAccountRepository.getBankAccountWithUser(accountId);
        if (!bankAccount) {
            throw new Error('BankAccount non trouvé.');
        }

        console.log('BankAccount trouvé avec succès:', bankAccount);
        return bankAccount;
    } catch (error) {
        console.error('Erreur lors de la récupération du BankAccount:', error.message);
        throw new Error('Erreur lors de la récupération du BankAccount.');
    }
}

module.exports = getBankAccount;
