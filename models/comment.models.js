const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    
    },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Comment", CommentSchema);
