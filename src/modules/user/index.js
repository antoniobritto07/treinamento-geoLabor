const express = require('express');
const userRouter = express.Router();

const createUser = require("./controllers/post");

userRouter.post(
    '/',
    createUser
);

module.exports = userRouter;