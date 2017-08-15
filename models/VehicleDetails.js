var mongoose = require('mongoose');

var VehicleDetailsSchema = new mongoose.Schema({
  vehicle_brand: String,
  vehicle_model: String,
  vehicle_year:Number,
  vehicle_colour:String,
  vehicle_interior_colour:String,

  update_at:{ type: Date, default:Date.now},
});

module.exports = mongoose.model('VehicleDetails', VehicleDetailsSchema);
