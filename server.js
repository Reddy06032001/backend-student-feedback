const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/feedback", feedbackRoutes);

// Correct MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Avoid infinite waiting
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
