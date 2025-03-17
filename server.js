const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const feedbackRoutes = require("./routes/feedbackRoutes");
const facultyfeedbackRoutes = require("./routes/facultyfeedbackRoutes");

const feedback_1_1_aiml = require("./routes/feeback_1_1_AIML_Routes");
const feedback_1_1_cse = require("./routes/feeback_1_1_CSE_Routes");
const feedback_1_1_ds = require("./routes/feeback_1_1_DS_Routes");
const feedback_1_1_ece = require("./routes/feeback_1_1_ECE_Routes");

const feedback_1_2_aiml = require("./routes/feeback_1_2_AIML_Routes");
const feedback_1_2_cse = require("./routes/feeback_1_2_CSE_Routes");
const feedback_1_2_ds = require("./routes/feeback_1_2_DS_Routes");
const feedback_1_2_ece = require("./routes/feeback_1_2_ECE_Routes");

const feedback_2_1_aiml = require("./routes/feeback_2_1_AIML_Routes");
const feedback_2_1_cse = require("./routes/feeback_2_1_CSE_Routes");
const feedback_2_1_ds = require("./routes/feeback_2_1_DS_Routes");
const feedback_2_1_ece = require("./routes/feeback_2_1_ECE_Routes");

const feedback_2_2_aiml = require("./routes/feeback_2_2_AIML_Routes");
const feedback_2_2_cse = require("./routes/feedback_2_2_CSE_Routes");
const feedback_2_2_ds = require("./routes/feedback_2_2_DS_Routes");
const feedback_2_2_ece = require("./routes/feedback_2_2_ECE_Routes");

const feedback_3_1_aiml = require("./routes/feedback_3_1_AIML_Routes");
const feedback_3_1_cse = require("./routes/feedback_3_1_CSE_Routes");
const feedback_3_1_ds = require("./routes/feedback_3_1_DS_Routes");
const feedback_3_1_ece = require("./routes/feedback_3_1_ECE_Routes");

const feedback_3_2_aiml = require("./routes/feedback_3_2_AIML_Routes");
const feedback_3_2_cse = require("./routes/feedback_3_2_CSE_Routes");
const feedback_3_2_ds = require("./routes/feedback_3_2_DS_Routes");
const feedback_3_2_ece = require("./routes/feedback_3_2_ECE_Routes");

const feedback_4_1_aiml = require("./routes/feedback_4_1_AIML_Routes");
const feedback_4_1_cse = require("./routes/feedback_4_1_CSE_Routes");
const feedback_4_1_ds = require("./routes/feedback_4_1_DS_Routes");
const feedback_4_1_ece = require("./routes/feedback_4_1_ECE_Routes");

const facultyRoutes = require("./routes/facultyRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/feedback", feedbackRoutes);
app.use("/api/facultyfeedback", facultyfeedbackRoutes);
app.use("/api/feedback_1_1_aiml", feedback_1_1_aiml);
app.use("/api/feedback_1_1_cse", feedback_1_1_cse);
app.use("/api/feedback_1_1_ds", feedback_1_1_ds);
app.use("/api/feedback_1_1_ece", feedback_1_1_ece);

app.use("/api/feedback_1_2_aiml", feedback_1_2_aiml);
app.use("/api/feedback_1_2_cse", feedback_1_2_cse);
app.use("/api/feedback_1_2_ds", feedback_1_2_ds);
app.use("/api/feedback_1_2_ece", feedback_1_2_ece);

app.use("/api/feedback_2_1_aiml", feedback_2_1_aiml);
app.use("/api/feedback_2_1_cse", feedback_2_1_cse);
app.use("/api/feedback_2_1_ds", feedback_2_1_ds);
app.use("/api/feedback_2_1_ece", feedback_2_1_ece);

app.use("/api/feedback_2_2_aiml", feedback_2_2_aiml);
app.use("/api/feedback_2_2_cse", feedback_2_2_cse);
app.use("/api/feedback_2_2_ds", feedback_2_2_ds);
app.use("/api/feedback_2_2_ece", feedback_2_2_ece);

app.use("/api/feedback_3_1_aiml", feedback_3_1_aiml);
app.use("/api/feedback_3_1_cse", feedback_3_1_cse);
app.use("/api/feedback_3_1_ds", feedback_3_1_ds);
app.use("/api/feedback_3_1_ece", feedback_3_1_ece);

app.use("/api/feedback_3_2_aiml", feedback_3_2_aiml);
app.use("/api/feedback_3_2_cse", feedback_3_2_cse);
app.use("/api/feedback_3_2_ds", feedback_3_2_ds);
app.use("/api/feedback_3_2_ece", feedback_3_2_ece);

app.use("/api/feedback_4_1_aiml", feedback_4_1_aiml);
app.use("/api/feedback_4_1_cse", feedback_4_1_cse);
app.use("/api/feedback_4_1_ds", feedback_4_1_ds);
app.use("/api/feedback_4_1_ece", feedback_4_1_ece);

app.use("/api/faculty", facultyRoutes);
// Correct MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Avoid infinite waiting
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
