const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
  {
    activity: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "activityModel",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    activityModel: {
      type: String,
      required: true,
      enum: ["Post", "Comment", "Message", "Reaction", "Relations"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Activity", ActivitySchema);
