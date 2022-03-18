const mongoose = require("mongoose");

const reactSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    react: { type: String, enum: ["like", "dislike"] },
  },
  { timestamps: true }
);
module.exports = mongoose.model("React", reactSchema);
