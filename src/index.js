require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes')
app.use("/", routes);

mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error')
);
mongoose.connection.once('open', () => {
    console.log('database connect!');
});

app.listen(3000, () => { console.log("listening on port 3000...") });