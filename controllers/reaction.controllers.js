const Reaction = require("../models/reaction.models");

const newReaction = async (req, res) => {
  try {
    const newReaction = new Reaction({
      author: req.verifiedUser._id,

      reaction: req.path.split("/")[3] === "like" ? "like" : "dislike",
      post: req.post._id,
    });

    const savedReaction = await newReaction.save();
    res.activity = { id: savedPost._id, model: "Reaction", action: "Reaction" };
    return res.status(201).json(savedReaction);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteReaction = async (req, res) => {
  const reaction = req.reaction;
  try {
    await Reaction.findByIdAndDelete(reaction._id);
    return res.status(204).json("deleteReaction");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.newReaction = newReaction;

module.exports.deleteReaction = deleteReaction;
