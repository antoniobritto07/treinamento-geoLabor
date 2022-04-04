const UserRepository = require("../../repositories/user")

module.exports = async (user) => {
    try {
        const createdUser = await UserRepository.create(user);
        return createdUser;
    } catch (error) {
        throw error
    }
}