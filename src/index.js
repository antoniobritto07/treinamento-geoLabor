require('dotenv').config();

//@ts-ignore
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//@ts-ignore
const routes = require('./routes')
app.use("/", routes);

mongoose.connect(process.env.MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error')
);
mongoose.connection.once('open', () => {
    console.log('database connect!');
});

app.listen(3000, () => { console.log("listening on port 3000...") });