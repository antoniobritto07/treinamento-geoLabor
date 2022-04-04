const StatusCodes = require("../../../../constants/statusCodes");
const updateTask = require("../../services/updateTask");

module.exports =
    async (req, res) => {
        try {
            const { taskId } = req.params;
            const task = await updateTask(taskId, req.body);

            return res.status(StatusCodes.SUCCESS).send({ task });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to update the task from an user", error: err })
        }
    }