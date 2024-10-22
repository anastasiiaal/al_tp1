const BankAccount = require('../../domain/entities/BankAccount');

const bankAccountRepository = {
    create: (accountData) => BankAccount.create(accountData),
    findById: (id) => BankAccount.findByPk(id),
    findByAccountNumber: (accountNumber) => BankAccount.findOne({ where: { accountNumber } }),
};

module.exports = bankAccountRepository;
