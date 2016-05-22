var mongoose = require('mongoose');

module.exports = function() {
  var deviceSchema = new mongoose.Schema({
      codeletter: { type: String },
      location: { type: String },
      deviceTag:  { type: String },
      data: {}
  });
  
  return deviceSchema;
};