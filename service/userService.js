const { User, Profile } = require('../models');

const createUser = async (firstName, lastName, email, password) => {
    try {
        let profileTitle = email.endsWith('company.com') ? 'Administrateur' : 'Utilisateur Standard';

        let profile = await Profile.findOne({ where: { title: profileTitle } });
        if (!profile) {
            profile = await Profile.create({ title: profileTitle });
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            ProfileId: profile.id
        });

        return user;
    } catch (error) {
        throw new Error('Erreur lors de la création de l\'utilisateur');
    }
}

module.exports = { createUser };
