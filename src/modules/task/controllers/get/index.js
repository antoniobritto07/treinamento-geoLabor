const StatusCodes = require("../../../../constants/statusCodes");
const getTasks = require("../../services/getTasks");

module.exports =
    async (req, res) => {
        try {
            const userId = req.userId;
            const tasks = await getTasks(userId)

            return res.status(StatusCodes.SUCCESS).send({ tasks });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to get the tasks of an user", error: err })
        }
    }