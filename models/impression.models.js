const mongoose = require("mongoose");

const ImpressionSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    impression: { type: String, enum: ["like", "dislike"]},
  },
  { timestamps: true }
);
module.exports = mongoose.model("Impression", ImpressionSchema);
