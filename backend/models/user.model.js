const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: "", required:true },
  lastName: { type: String, default: "", required:true },
  phone: { type: String, default: "", required:true },
  accountType: { type: String, default: "", required:true },
  email: { type: String, unique: true, lowercase: true, required: true },
  password : {type: String, required:true}
});


const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
