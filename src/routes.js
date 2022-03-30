const express = require('express');

const userRouter = require('./modules/user');

const routes = express.Router()

routes.use('/user', userRouter)

module.exports = routes