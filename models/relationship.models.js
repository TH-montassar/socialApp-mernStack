const mongoose = require("mongoose");

const RelationshipSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["friesnd", "blocked", "pending","add frisend","requested"],
      default: "pending",
    },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Relationship", RelationshipSchema);
