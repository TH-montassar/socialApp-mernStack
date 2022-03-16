const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    content: { type: String },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isSeen: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Message", MessageSchema);
