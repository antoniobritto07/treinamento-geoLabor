const UserRepository = require("../../repositories/user")

module.exports = async (email, password) => {
    try {
        const user = await UserRepository.get(email, password);
        return user;
    } catch (error) {
        throw error
    }
}