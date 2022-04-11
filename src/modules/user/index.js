const express = require('express');
const userRouter = express.Router();

const createUser = require("./controllers/post");
const getUser = require("./controllers/get");

userRouter.post(
    '/',
    createUser
);

userRouter.get(
    '/',
    getUser
);


module.exports = userRouter;