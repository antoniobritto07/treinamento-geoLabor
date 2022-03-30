//@ts-ignore
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/treinamentoGeolabor', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;