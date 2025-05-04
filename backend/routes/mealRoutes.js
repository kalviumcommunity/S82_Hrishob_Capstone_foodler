const express = require("express");
const router = express.Router();
const Meal = require("../models/Meal");

router.post("/", async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;

    const newMeal = new Meal({
      title,
      description,
      createdBy,
    });

    const savedMeal = await newMeal.save();
    res.status(201).json(savedMeal);
  } catch (err) {
    res.status(500).json({ error: "Error creating meal", details: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const meals = await Meal.find().sort({ createdAt: -1 });
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json({ error: "Error fetching meals", details: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedMeal) return res.status(404).json({ error: "Meal not found" });

    res.status(200).json(updatedMeal);
  } catch (err) {
    res.status(500).json({ error: "Error updating meal", details: err.message });
  }
});

module.exports = router;
