const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
