const express = require('express');

const userRouter = require('./modules/user');
const sessionRouter = require('./modules/session');

const routes = express.Router()

routes.use('/user', userRouter)
routes.use('/session', sessionRouter)

module.exports = routes