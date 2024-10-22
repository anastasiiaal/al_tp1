const createBankAccount = require('../../application/commands/createBankAccount');
const bankAccountRepository = require('../../persistence/repositories/bankAccountRepository');
const bankUserRepository = require('../../persistence/repositories/bankUserRepository');
const getBankAccount = require('../../application/queries/getBankAccount');

const createBankAccountController = async (req, res) => {
    try {
        const { accountNumber, balance, bankUserId } = req.body;
        const bankAccount = await createBankAccount({ accountNumber, balance, bankUserId }, bankAccountRepository, bankUserRepository);

        res.status(201).json(bankAccount);
    } catch (error) {
        console.error('Erreur lors de la création du BankAccount:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const getBankAccountController = async (req, res) => {
    try {
        const { id } = req.params;

        const bankAccount = await getBankAccount(id, bankAccountRepository);

        res.status(200).json(bankAccount);
    } catch (error) {
        console.error('Erreur lors de la récupération du BankAccount:', error.message);
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    createBankAccountController,
    getBankAccountController
};
