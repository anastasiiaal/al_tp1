class UserDTO {
    constructor({ id, firstName, lastName, email, profile }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profile = profile;
    }

    static fromUser(user) { // creating DTO from an entity
        return new UserDTO({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            profile: user.Profile ? user.Profile.title : null,
        });
    }
}

module.exports = UserDTO;
