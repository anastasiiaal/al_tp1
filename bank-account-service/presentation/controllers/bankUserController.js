const getBankUser = require('../../application/queries/getBankUser');

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

module.exports = {
    getBankUserController
};
