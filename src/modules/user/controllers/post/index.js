const StatusCodes = require("../../../../constants/statusCodes");
const generateToken = require("../../../../utils/generateToken");
const createUser = require('../../services/createUser');

module.exports =
    async (req, res) => {
        try {
            const user = await createUser(req.body);

            console.log(user)

            const token = generateToken(user.id)

            return res.status(StatusCodes.SUCCESS).json({ user, token });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to create a new user", error: err })
        }
    }