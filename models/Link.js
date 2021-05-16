const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linkSchema = new Schema({
  inputlink: String,
  newRouter: String
});

module.exports = mongoose.model('Link',linkSchema)