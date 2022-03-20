const Reaction = require("../models/reaction.models");

const newReaction = async (req, res) => {
  try {
    const newReaction = new Reaction({
      author: req.verifiedUser._id,

      reaction: req.path.split("/")[3] === "like" ? "like" : "dislike",
      post: req.post._id,
    });

    const savedComment = await newReaction.save();

    return res.status(201).json(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteReaction = async (req, res) => {
  const reaction = req.reaction;
  try {
    const deleteReaction = await reaction.findByIdAndDelete(reaction._id);
    return res.status(200).json(deleteReaction);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.newReaction = newReaction;

module.exports.deleteReaction = deleteReaction;
