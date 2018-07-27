'use strict';
var mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;


var carSchema = new Schema({

  model: {
      type: String,
      required: 'Please enter the Model / Brand name of your car'
  },

  make: {
      type: Number,
      required: 'Please enter the make year of your car'
  },

  color: {
    type: String,
    required: 'Please enter the color of your car'
  },

  dealerName: {
    type: String,
    required: 'Please enter the dealer name of your car'
  }

});

/* // This plugin can inject an autoincremental int for each object
carSchema.plugin(AutoIncrement, {inc_field: 'id'}); 
 */

module.exports = mongoose.model('Cars', carSchema);