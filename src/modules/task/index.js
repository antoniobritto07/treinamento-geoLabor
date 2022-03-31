const express = require('express');
const authMiddleware = require('../../middlewares/auth');
const taskRouter = express.Router();

taskRouter.use(authMiddleware);

const createTask = require("./controllers/post");

taskRouter.post(
    '/',
    createTask
);

module.exports = taskRouter;