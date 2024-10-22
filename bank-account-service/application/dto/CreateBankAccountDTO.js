class CreateBankAccountDTO {
    constructor({ accountNumber, balance, bankUserId }) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.bankUserId = bankUserId;
    }

    static fromRequest(body) {
        return new CreateBankAccountDTO({
            accountNumber: body.accountNumber,
            balance: body.balance,
            bankUserId: body.bankUserId
        });
    }

    validate() {
        if (!this.accountNumber || !this.bankUserId) {
            throw new Error('Les champs accountNumber et bankUserId sont obligatoires.');
        }

        if (isNaN(this.balance)) {
            throw new Error('Le solde doit être un nombre valide.');
        }
    }
}

module.exports = CreateBankAccountDTO;
