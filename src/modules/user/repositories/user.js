const User = require("../model")
const DBError = require("../../../errors/DBError");

class UserRepository {
    createUser = async (
        userData
    ) => {
        try {
            const user = await User.create(userData);

            return user;
        }
        catch (error) {
            throw new DBError('Error while trying to create a new user', 'users', error);
        }
    };
}

module.exports = new UserRepository();
