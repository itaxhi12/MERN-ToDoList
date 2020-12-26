const mongoose = require('mongoose');
mongoose.Promsie = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = 'mongodb://localhost:27017/todos';
db.models = require('./model.js');
module.exports = db;