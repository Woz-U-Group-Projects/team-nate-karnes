let mongoose = require('mongoose')
var Schema = mongoose.Schema;

var weathersSchema = new Schema({
  name: String,
  label: String
});

module.exports = mongoose.model('weathers', weathersSchema );