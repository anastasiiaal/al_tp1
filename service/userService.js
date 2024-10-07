const { User, Profile } = require('../models');

const createUser = async (firstName, lastName, email, password) => {
    try {
        console.log('Vérification du profil pour l\'email :', email);

        let profileTitle = email.endsWith('company.com') ? 'Administrateur' : 'Utilisateur Standard';


        let profile = await Profile.findOne({ where: { title: profileTitle } });
        console.log('Profil trouvé ou à créer :', profileTitle);

        if (!profile) {
            console.log('Le profil n\'existe pas, création du profil :', profileTitle);
            profile = await Profile.create({ title: profileTitle });
        }

        console.log('Création de l\'utilisateur avec le profil ID :', profile.id);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            ProfileId: profile.id
        });

        console.log('Utilisateur créé avec succès:', user);
        return user;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur ou du profil :', error);
        throw new Error('Erreur lors de la création de l\'utilisateur');
    }
}

module.exports = { createUser };
