const mongoose = require("mongoose");

const RelationshipSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["friend", "blocked", "pending"],
      default: "pending",
    },
    friend: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Relationship", RelationshipSchema);
