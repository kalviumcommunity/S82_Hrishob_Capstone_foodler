// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Remove .js extension in CommonJS
const userRoutes = require("./routes/userRoutes")
const mealRoutes = require("./routes/mealRoutes")
const authRoutes = require("./routes/authRoutes")
dotenv.config(); // Load .env

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.use("/api/users", userRoutes);
app.use("/api/meals",mealRoutes);
app.use("/api/auth",authRoutes);
// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
