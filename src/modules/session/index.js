const express = require('express');
const sessionRouter = express.Router();

const createSession = require("./controllers/post");

sessionRouter.post(
    '/',
    createSession
);

module.exports = sessionRouter;