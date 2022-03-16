const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    number: { type: Number },
    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      required: true,
    },
    password: { type: String },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
