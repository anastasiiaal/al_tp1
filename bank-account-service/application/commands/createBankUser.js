const CreateBankUserDTO = require('../dto/CreateBankUserDTO');

async function createBankUser(userData, bankUserRepository) {
    try {
        console.log('Données reçues pour la création d\'un BankUser :', userData);

        const createBankUserDTO = CreateBankUserDTO.fromRequest(userData);

        createBankUserDTO.validate();

        const existingBankUser = await bankUserRepository.findByEmail(createBankUserDTO.email);
        if (existingBankUser) {
            console.log('Un utilisateur bancaire avec cet email existe déjà:', createBankUserDTO.email);
            throw new Error('Un utilisateur bancaire avec cet email existe déjà.');
        }

        const bankUser = await bankUserRepository.create(createBankUserDTO);

        console.log('Utilisateur bancaire créé avec succès:', bankUser);
        return bankUser;
    } catch (error) {
        console.error('Erreur lors de la création du BankUser ou du profil :', error);
        throw new Error('Erreur lors de la création du BankUser');
    }
}

module.exports = createBankUser;
