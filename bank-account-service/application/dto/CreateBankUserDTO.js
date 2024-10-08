class CreateBankUserDTO {
    constructor({ firstName, lastName, email, userId }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userId = userId;
    }

    static fromRequest(body) {
        return new CreateBankUserDTO({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            userId: body.userId
        });
    }

    validate() {
        if (!this.firstName || !this.lastName || !this.email || !this.userId) {
            throw new Error('Les champs firstName, lastName, email et userId sont obligatoires.');
        }

        if (!this.email.includes('@')) {
            throw new Error('Email invalide.');
        }
    }
}

module.exports = CreateBankUserDTO;
