class CreateUserDTO {
    constructor({ firstName, lastName, email, password }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    static fromRequest(body) {
        return new CreateUserDTO({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
        });
    }

    validate() {
        if (!this.firstName || !this.lastName || !this.email || !this.password) {
            throw new Error('Les champs firstName, lastName, email et password sont obligatoires.');
        }
        if (!this.email.includes('@')) {
            throw new Error('Email invalide.');
        }
    }
}

module.exports = CreateUserDTO;
