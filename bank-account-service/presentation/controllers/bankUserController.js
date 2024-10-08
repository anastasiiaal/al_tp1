const getBankUser = require('../../application/queries/getBankUser');
const createBankUser = require('../../application/commands/createBankUser');

const bankUserRepository = require('../../persistence/repositories/bankUserRepository');
const bankAccountRepository = require('../../persistence/repositories/bankAccountRepository');

const getBankUserController = async (req, res) => {
    try {
        const bankUser = await getBankUser(req.params.id, bankUserRepository);
        res.status(200).json(bankUser);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createBankUserController = async (req, res) => {
    try {
        const { firstName, lastName, email, userId } = req.body;
        
        console.log('Requête reçue pour créer un BankUser avec les données :', { firstName, lastName, email, userId });

        const bankUser = await createBankUser({ firstName, lastName, email, userId }, bankUserRepository);

        console.log('Utilisateur bancaire créé avec succès:', bankUser);
        res.status(201).json(bankUser);
    } catch (error) {
        console.error('Erreur lors de la création du BankUser:', error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getBankUserController,
    createBankUserController
};
