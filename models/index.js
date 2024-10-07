const sequelize = require('./_database');

// models import
const User = require('./User')
const Profile = require('./Profile')

// relations declaration
// user can have only one role, a role can define many users
User.belongsTo(Profile, { foreignKey: 'ProfileId' });

// DB sync
// sequelize.sync({alter: true});

module.exports = {
  User: User,
  Profile: Profile,
}
