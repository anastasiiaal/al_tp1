const CreateBankAccountDTO = require('../dto/CreateBankAccountDTO');

async function createBankAccount(accountData, bankAccountRepository, bankUserRepository) {
    try {
        console.log('Données reçues pour la création d\'un BankAccount :', accountData);
        const createBankAccountDTO = CreateBankAccountDTO.fromRequest(accountData);

        createBankAccountDTO.validate();

        const bankUser = await bankUserRepository.findById(createBankAccountDTO.bankUserId);
        if (!bankUser) {
            throw new Error('BankUser non trouvé.');
        }

        const bankAccount = await bankAccountRepository.create({
            accountNumber: createBankAccountDTO.accountNumber,
            balance: createBankAccountDTO.balance || 0.0,
            bankUserId: bankUser.id
        });

        console.log('BankAccount créé avec succès:', bankAccount);
        return bankAccount;
    } catch (error) {
        console.error('Erreur lors de la création du BankAccount:', error.message);
        throw new Error('Erreur lors de la création du BankAccount.');
    }
}

module.exports = createBankAccount;
