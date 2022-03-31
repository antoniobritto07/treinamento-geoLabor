const StatusCodes = require("../../../../constants/statusCodes");

module.exports =
    async (req, res) => {
        try {
            return res.status(StatusCodes.SUCCESS).json({ notification: "Tudo certo" });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to create a new task", error: err })
        }
    }