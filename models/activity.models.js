const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
  {
    activity: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    impression: { type: mongoose.Schema.Types.ObjectId, ref: "Impression" },
    //   message: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
    notification: { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    relationship: { type: mongoose.Schema.Types.ObjectId, ref: "Relationship" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Activity", ActivitySchema);
