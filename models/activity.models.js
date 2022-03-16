const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
  {
    activity: { type, enum: [] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Activity", ActivitySchema);
