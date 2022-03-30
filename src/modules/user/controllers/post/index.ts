import { Request, Response } from 'express';
import StatusCodes from "../../../../constants/statusCodes";
const User = require('../../model')

module.exports =
    async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            if (User.findOne({ email })) {
                return res.status(400).send({ error: 'User already exists!' });
            }

            const user = await User.create(req.body);

            return res.status(StatusCodes.SUCCESS).json(user)
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ notification: "Error while trying to create a new user", error: err })
        }
    }