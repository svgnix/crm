const mongoose = require("mongoose");

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
