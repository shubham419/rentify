const mongoose = require("mongoose");

const listedPropertySchema = new mongoose.Schema({
  state: { type: String, required: true },
  city: { type: String, required: true },
  place: { type: String, required: true },
  rent: { type: Number, required: true },
  furnished: { type: String, enum: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'], required: true },
  parking: { type: String, enum: ['2 Wheeler', '4 Wheeler', 'None'], required: true },
  bhkType: { type: String, enum: ['1 BHK', '2 BHK', '3 BHK'], required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  firstName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

listedPropertySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const ListedProperty = mongoose.model("ListedProperty", listedPropertySchema);

module.exports = ListedProperty;
