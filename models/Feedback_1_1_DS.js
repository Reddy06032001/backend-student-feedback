const mongoose = require("mongoose");

const Feedback_1_1_DS = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true, // Ensures section is mandatory
    },
    subjectRatings: {
      type: Map,
      of: String,
      required: true,
    },
    labSubjectRatings: {
      type: Map,
      of: [String],
      required: true,
    },
    overallRating: {
      type: Number,
      required: true,
    },
    suggestions: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback_1_1_DS", Feedback_1_1_DS);
