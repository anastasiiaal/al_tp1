const sequelize = require('../../infrastructure/config/databaseConfig');

// models import
const BankUser = require('../../domain/entities/BankUser');
const BankAccount = require('../../domain/entities/BankAccount');

// relations declaration
// BankUser can have many accounts, a BankAccount belongs to 1
BankUser.hasMany(BankAccount, { foreignKey: 'bankUserId' });
BankAccount.belongsTo(BankUser, { foreignKey: 'bankUserId' });

// DB sync
// sequelize.sync({alter: true});

module.exports = {
  BankUser: BankUser,
  BankAccount: BankAccount,
}
