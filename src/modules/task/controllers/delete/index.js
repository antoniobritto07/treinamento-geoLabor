const StatusCodes = require("../../../../constants/statusCodes");
const deleteTask = require("../../services/deleteTask")

module.exports =
    async (req, res) => {
        try {
            const { taskId } = req.params;
            await deleteTask(taskId)

            return res.status(StatusCodes.SUCCESS)
                .json({ notification: "Task has been deleted successfully" });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to delete the task from an user", error: err })
        }
    }