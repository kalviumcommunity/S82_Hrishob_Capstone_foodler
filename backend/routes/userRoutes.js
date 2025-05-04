const express = require("express");
const router = express.Router();
const User = require('../models/User')

router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Error creating user", details: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ username: 1 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users", details: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Error updating user", details: err.message });
  }
});

module.exports = router;
