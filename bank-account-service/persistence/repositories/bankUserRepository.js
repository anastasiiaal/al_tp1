const BankUser = require('../../domain/entities/BankUser');
const BankAccount = require('../../domain/entities/BankAccount');

const bankUserRepository = {
    findById: (id) => BankUser.findByPk(id),
    findByEmail: (email) => BankUser.findOne({ where: { email } }),
    create: (userData) => BankUser.create(userData),
    findByUserId: (userId) => BankUser.findOne({ where: { userId } }),
    delete: (id) => BankUser.destroy({ where: { id } }),
    getUserWithAccounts: (bankUserId) => {
        return BankUser.findOne({
            where: { id: bankUserId },
            attributes: ['firstName', 'lastName'],
            include: [
                {
                    model: BankAccount,
                    attributes: ['accountNumber', 'balance']
                }
            ]
        });
    }
};

module.exports = bankUserRepository;
