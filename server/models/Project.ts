import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  // The way we reference other models via ID without using the automatically generated ObjectID is through ref
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
