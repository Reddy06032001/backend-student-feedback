const mongoose = require("mongoose");

const Feedback_2_1_CSE = new mongoose.Schema(
  {
   
    subjectRatings: {
      type: Map,
      of: String,
      required: true,
    },
    labsubject: {
      type: Map,
      of: String,
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

module.exports = mongoose.model("Feedback_2_1_CSE", Feedback_2_1_CSE);
