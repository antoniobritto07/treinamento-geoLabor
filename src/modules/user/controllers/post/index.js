const StatusCodes = require("../../../../constants/statusCodes");
const User = require("../../model")

module.exports =
    async (req, res) => {
        try {
            const user = await User.create(req.body);

            return res.status(StatusCodes.SUCCESS).json(user)
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to create a new user", error: err })
        }
    }