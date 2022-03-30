const UserRepository = require("../../repositories/user");
const StatusCodes = require("../../../../constants/statusCodes");
const generateToken = require("../../../../utils/generateToken");

module.exports =
    async (req, res) => {
        try {
            const user = await UserRepository.createUser(req.body);

            return res.status(StatusCodes.SUCCESS).send({
                user,
                token: generateToken({ id: user.id })
            });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to create a new user", error: err })
        }
    }