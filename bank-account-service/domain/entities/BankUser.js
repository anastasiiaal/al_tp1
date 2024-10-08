const { DataTypes } = require('sequelize');
const sequelize = require('../../infrastructure/config/databaseConfig');

const BankUser = sequelize.define('BankUser', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId: {           // ce champ correspondra à l'id de user/User
        type: DataTypes.INTEGER,
        allowNull: false,  
        unique: true
    }
});

module.exports = BankUser;
