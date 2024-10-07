const sequelize = require('../../infrastructure/config/databaseConfig');
const { DataTypes } = require('sequelize');

const Profile = sequelize.define('Profile', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{})

module.exports = Profile