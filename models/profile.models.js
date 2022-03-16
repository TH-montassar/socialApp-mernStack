const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    birthday: { type: Date },
    avatar: { type: String },
    bio: { type: String },
    cover: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Profile", ProfileSchema);
