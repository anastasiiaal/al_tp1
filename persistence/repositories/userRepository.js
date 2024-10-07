const User = require('../../domain/entities/User');

const userRepository = {
    create: (userData) => User.create(userData),
    findByPk: (id) => User.findByPk(id),
    findAll: () => User.findAll({ include: 'Profile' }),
    delete: (id) => User.destroy({ where: { id } }),
    update: (id, updateData) => User.update(updateData, { where: { id } }),
};

module.exports = userRepository;
