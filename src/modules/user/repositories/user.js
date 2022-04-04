const User = require("../model")
const DBError = require("../../../errors/DBError");
const { findOne } = require("../model");

class UserRepository {
    create = async (
        userData
    ) => {
        try {
            const { email } = userData;
            if (await User.findOne({ email: email })) {
                throw new Error("Email is already registered");
            }

            const user = await User.create(userData);

            return user;
        }
        catch (error) {
            throw new DBError('Error while trying to create a new user', 'users', error);
        }
    };
    get = async (
        email,
        password
    ) => {
        try {
            const user = await User.findOne({ email, password });

            return user;
        }
        catch (error) {
            throw new DBError('Error while trying to get an user', 'users', error);
        }
    };
}

module.exports = new UserRepository();
