const axios = require('axios');
const { sequelize } = require('../../persistence/models'); 
const CreateUserDTO = require('../dto/CreateUserDTO');

async function createUser(userData, userRepository, profileRepository) {
    const transaction = await sequelize.transaction(); 

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
        }, { transaction });  // include transaction

        const bankUserResponse = await axios.post('http://localhost:4000/bankUser/create', {
            firstName: createUserDTO.firstName,
            lastName: createUserDTO.lastName,
            email: createUserDTO.email,
            userId: user.id  // link User && BankUser via l'id de User
        });

        if (bankUserResponse.status !== 201) {
            throw new Error('Erreur lors de la création du BankUser dans le micro-service bancaire');
        }

        await transaction.commit();

        console.log('Utilisateur et BankUser créés avec succès:', user);
        return user;
    } catch (error) {
        await transaction.rollback();
        console.error('Erreur lors de la création de l\'utilisateur ou du BankUser :', error);
        throw new Error('Erreur lors de la création de l\'utilisateur et du BankUser');
    }
}

module.exports = createUser;
