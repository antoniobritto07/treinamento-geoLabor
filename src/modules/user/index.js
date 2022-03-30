import express from 'express';
const userRouter = express.Router();

const createUser = require("./controllers/post");

userRouter.get(
    '/',
    createUser
);

module.exports = userRouter;
