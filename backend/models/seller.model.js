const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  state: { type: String, required: true },
  city: { type: String, required: true },
  place: { type: String, required: true },
  rent: { type: Number, required: true },
  phone: { type: String, required: true },
  furnished: {
    type: String,
    enum: ["Fully Furnished", "Semi Furnished", "Unfurnished"],
    required: true,
  },
  parking: {
    type: String,
    enum: ["2 Wheeler", "4 Wheeler", "None"],
    required: true,
  },
  bhkType: { type: String, enum: ["1 BHK", "2 BHK", "3 BHK"], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

propertySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const sellerSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  firstName: { type: String, required: true },
  phone: { type: String, required: true },
  properties: [propertySchema], 
});

const sellerModel = mongoose.model("Seller", sellerSchema);

module.exports = sellerModel;
