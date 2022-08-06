const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    gender: String,
  },
  { collection: "students" }
);

module.exports = mongoose.model("Student", StudentSchema);
