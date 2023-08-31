//Mongoose schemas ! Not related to Graphql schemas !
const mongoose = require("mongoose");

const CoachSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Coach", CoachSchema);
