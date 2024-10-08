const sequelize = require('../../infrastructure/config/databaseConfig');
const Sequelize = require('sequelize');


// models import
const User = require('../../domain/entities/User')
const Profile = require('../../domain/entities/Profile')

// relations declaration
// user can have only one role, a role can define many users
User.belongsTo(Profile, { foreignKey: 'ProfileId' });

// DB sync
// sequelize.sync({alter: true});

module.exports = {
  sequelize: sequelize,
  User: User,
  Profile: Profile,
}
