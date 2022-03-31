const express = require('express');

const userRouter = require('./modules/user');
const sessionRouter = require('./modules/session');
const taskRouter = require('./modules/task');

const routes = express.Router()

routes.use('/user', userRouter)
routes.use('/session', sessionRouter)
routes.use('/task', taskRouter)

module.exports = routes