const Profile = require('../../domain/entities/Profile');

const profileRepository = {
    create: (profileData) => Profile.create(profileData),
    findByTitle: (title) => Profile.findOne({ where: { title } }),
};

module.exports = profileRepository;
