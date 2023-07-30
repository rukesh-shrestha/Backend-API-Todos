const mongoose = require("mongoose");
const User = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Missing username"],
    },
    email: {
      type: String,
      required: [true, "Missing email"],
      unique: [true, "User already exist"],
    },
    firstName: {
      type: String,
      required: [true, "Missing first name"],
    },
    lastName: {
      type: String,
      required: [true, "Missing last name"],
    },
    password: {
      type: String,
      required: [true, "Missing passpord"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
