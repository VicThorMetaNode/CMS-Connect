//Mongoose schemas ! Not related to Graphql schemas !
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: [
      "Not Started",
      "BackLog",
      "SpringLog",
      "In Progress",
      "Under review",
      "Waiting Validation",
      "Completed",
      "Discarded",
    ],
  },
  CoachId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
