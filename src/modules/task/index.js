const express = require('express');
const authMiddleware = require('../../middlewares/auth');
const taskRouter = express.Router();

taskRouter.use(authMiddleware);

const getTask = require("./controllers/get");
const createTask = require("./controllers/post");
const updateTask = require("./controllers/put");
const deleteTask = require("./controllers/delete");

taskRouter.get(
    '/',
    getTask
);
taskRouter.post(
    '/',
    createTask
);
taskRouter.put(
    '/:taskId',
    updateTask
);
taskRouter.delete(
    '/:taskId',
    deleteTask
);

module.exports = taskRouter;