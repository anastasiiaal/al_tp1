async function createUser(userData, userRepository, profileRepository) {
    try {
        console.log('Vérification du profil pour l\'email :', userData.email);

        let profileTitle = userData.email.endsWith('company.com') ? 'Administrateur' : 'Utilisateur Standard';

        let profile = await profileRepository.findByTitle(profileTitle);
        console.log('Profil trouvé ou à créer :', profileTitle);

        if (!profile) {
            console.log('Le profil n\'existe pas, création du profil :', profileTitle);
            profile = await profileRepository.create({ title: profileTitle });
        }

        console.log('Création de l\'utilisateur avec le profil ID :', profile.id);
        const user = await userRepository.create({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            ProfileId: profile.id
        });

        console.log('Utilisateur créé avec succès:', user);
        return user;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur ou du profil :', error);
        throw new Error('Erreur lors de la création de l\'utilisateur');
    }
}

module.exports = createUser;
