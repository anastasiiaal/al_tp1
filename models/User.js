const { DataTypes } = require('sequelize');
const sequelize = require('./_database');
const Profile = require('./Profile');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    indexes: [
        {'unique': true, fields: ['email']},
    ]
});

User.belongsTo(Profile, { as: 'profile', foreignKey: 'ProfileId' });

module.exports = User;
