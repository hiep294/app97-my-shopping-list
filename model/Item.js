var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  title: String,
  isBought: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);