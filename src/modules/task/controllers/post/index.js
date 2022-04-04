const StatusCodes = require("../../../../constants/statusCodes");
const createTask = require("../../services/createTask");

module.exports =
    async (req, res) => {
        try {
            const userId = req.userId;
            const task = await createTask(req.body, userId);
            return res.status(StatusCodes.SUCCESS).json({ task });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to create a new task", error: err })
        }
    }