async function getBankUser(id, bankUserRepository) {
    const bankUser = await bankUserRepository.findById(id);

    if (!bankUser) {
        throw new Error(`Utilisateur bancaire avec l'ID ${id} non trouvé.`);
    }

    return bankUser;
}

module.exports = getBankUser;
