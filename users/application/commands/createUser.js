const CreateUserDTO = require('../dto/CreateUserDTO');

async function createUser(userData, userRepository, profileRepository) {
    try {
        const createUserDTO = CreateUserDTO.fromRequest(userData);
        createUserDTO.validate();

        const existingUser = await userRepository.findByEmail(createUserDTO.email);
        if (existingUser) {
            throw new Error('Un utilisateur avec cet email existe déjà.');
        }

        let profileTitle = createUserDTO.email.endsWith('company.com') ? 'Administrateur' : 'Utilisateur Standard';
        let profile = await profileRepository.findByTitle(profileTitle);
        console.log('Profil trouvé ou à créer :', profileTitle);

        if (!profile) {
            console.log('Le profil n\'existe pas, création du profil :', profileTitle);
            profile = await profileRepository.create({ title: profileTitle });
        }

        console.log('Création de l\'utilisateur avec le profil ID :', profile.id);
        const user = await userRepository.create({
            firstName: createUserDTO.firstName,
            lastName: createUserDTO.lastName,
            email: createUserDTO.email,
            password: createUserDTO.password,
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
