let mongoose = require('mongoose')
var Schema = mongoose.Schema;

var holidaysSchema = new Schema({
  name: String,
  label: String
});

module.exports = mongoose.model('holidays', holidaysSchema);

