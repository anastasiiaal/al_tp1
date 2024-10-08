const BankUser = require('../../domain/entities/BankUser');

const bankUserRepository = {
    findById: (id) => BankUser.findByPk(id),
    findByEmail: (email) => BankUser.findOne({ where: { email } }),
    create: (userData) => BankUser.create(userData),
    findByUserId: (userId) => BankUser.findOne({ where: { userId } }),
    delete: (id) => BankUser.destroy({ where: { id } })
};

module.exports = bankUserRepository;
