const { DataTypes } = require('sequelize');
const sequelize = require('../../infrastructure/config/databaseConfig');
const BankUser = require('./BankUser');

const BankAccount = sequelize.define('BankAccount', {
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    bankUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: BankUser,
            key: 'id'
        }
    }
});

module.exports = BankAccount;
