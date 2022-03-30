const User = require("../../../user/model");
// const UserRepository = require("../../repositories/user");
const StatusCodes = require("../../../../constants/statusCodes");
const jwt = require("jsonwebtoken");
const generateToken = require("../../../../utils/generateToken")

module.exports =
    async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email, password });

            if (!user) {
                return res.status(400).send({ error: "User not found!" });
            }

            const token = generateToken(user.id)

            return res.status(StatusCodes.SUCCESS).json({ user, token });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to initialize a new session", error: err })
        }
    }