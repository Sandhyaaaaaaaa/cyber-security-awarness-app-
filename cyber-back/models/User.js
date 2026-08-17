const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // Username is required and must be unique
  email:    { type: String, required: true, unique: true },  // Email is required and must be unique
  password: { type: String, required: true },                // Password is required (hashed before saving)
});

module.exports = mongoose.model("User", userSchema);
