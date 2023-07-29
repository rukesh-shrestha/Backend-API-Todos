const mongoose = require("mongoose");
const Todos = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Enter your todo title."],
    },
    description: {
      type: String,
      required: [true, "Enter your description."],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todos", Todos);
