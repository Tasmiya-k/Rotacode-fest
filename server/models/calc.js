const mongoose = require("mongoose");

const CarbonFootprintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  personalCarbonFootprint: { type: Number, required: true },
  travelCarbonFootprint: { type: Number, required: true },
  foodCarbonFootprint: { type: Number, required: true },
  energyCarbonFootprint: { type: Number, required: true },
  wasteCarbonFootprint: { type: Number, required: true },
  consumptionCarbonFootprint: { type: Number, required: true },
});

const CarbonFootprintModel = mongoose.model('CarbonFootprint', CarbonFootprintSchema);

module.exports = CarbonFootprintModel;
