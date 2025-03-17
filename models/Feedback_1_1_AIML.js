const mongoose = require("mongoose");

const Feedback_1_1_AIML = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
    },
    subjectRatings: {
      type: Map,
      of: Number, // ✅ Change 'String' to 'Number' for ratings
      required: true,
    },
    labSubjectRatings: {
      type: Map,
      of: [String], // ✅ Change 'String' to '[String]' (array of strings)
      required: true,
    },
    overallRating: {
      type: Number, // ✅ Should be a number
      required: true,
    },
    suggestions: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback_1_1_AIML", Feedback_1_1_AIML);
