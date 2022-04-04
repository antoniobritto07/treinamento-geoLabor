const StatusCodes = require("../../../../constants/statusCodes");
const generateToken = require("../../../../utils/generateToken")
const getUser = require("../../../user/services/getUser")

module.exports =
    async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await getUser( email, password );

            if (!user) {
                return res.status(400).send({ error: "User not found!" });
            }

            const token = generateToken(user.id);

            return res.status(StatusCodes.SUCCESS).json({ user, token });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to initialize a new session", error: err })
        }
    }