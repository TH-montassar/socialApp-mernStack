const mongoose = require("mongoose");

const RelationshipSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["friend", "blocked", "pending", "requested"],
      default: "pending",
    },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Relationship", RelationshipSchema);
