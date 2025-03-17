const mongoose = require("mongoose");

const Feedback_3_2_ECE = new mongoose.Schema(
  {
    
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

module.exports = mongoose.model("Feedback_3_2_ECE", Feedback_3_2_ECE);
