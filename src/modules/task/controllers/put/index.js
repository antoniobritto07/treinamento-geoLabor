const StatusCodes = require("../../../../constants/statusCodes");
const Task = require("../../model");

module.exports =
    async (req, res) => {
        try {
            const task = await Task.findOneAndUpdate(req.params.taskId, req.body, { new: true });

            return res.status(StatusCodes.SUCCESS).send({ task });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to delete the task from an user", error: err })
        }
    }