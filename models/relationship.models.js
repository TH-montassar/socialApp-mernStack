const mongoose = require("mongoose");

const RelationshipSchema = new mongoose.Schema(
  {
    status: { type: String, enum: ["friend ", "blocked"], default: "blocked" },
    friend: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Relationship", RelationshipSchema);
