const BankAccount = require('../../domain/entities/BankAccount');
const BankUser = require('../../domain/entities/BankUser');  // Assure-toi d'importer BankUser

const bankAccountRepository = {
    create: (accountData) => BankAccount.create(accountData),
    findById: (id) => BankAccount.findByPk(id),
    findByAccountNumber: (accountNumber) => BankAccount.findOne({ where: { accountNumber } }),

    getBankAccountWithUser: (accountId) => {
        return BankAccount.findOne({
            where: { id: accountId },
            include: [
                {
                    model: BankUser,
                    attributes: ['firstName', 'lastName']  // display name & surname of holder
                }
            ]
        });
    }
};

module.exports = bankAccountRepository;
