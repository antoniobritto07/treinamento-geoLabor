//@ts-ignore
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//@ts-ignore
const routes = require('./routes')
app.use("/", routes);

app.listen(3000, () => { console.log("listening on port 3000...") });