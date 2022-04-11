module.exports =
    async (req, res) => {
        try {
            return res.status(200).json({
                notification: "Tudo rodando certo"
            });
        }
        catch (err) {
            console.log(err)
            return res.status(500)
                .json({ notification: "Error while trying to create a new user", error: err })
        }
    }