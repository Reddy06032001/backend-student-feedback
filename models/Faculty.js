const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  facultyName: String,
  branch: String,
  handledSubject: String,
  year: String,
  semester: String,
});

module.exports = mongoose.model("Faculty", facultySchema);
