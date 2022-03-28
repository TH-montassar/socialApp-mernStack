const Reaction = require("../models/reaction.models");

const newReaction = async (req, res, next) => {
  try {
    const newReaction = new Reaction({
      author: req.verifiedUser._id,

      reaction: req.path.split("/")[3] === "like" ? "like" : "dislike",
      post: req.post._id,
    });

    const savedReaction = await newReaction.save();
    res.activity = {
      id: savedReaction._id,
      model: "Reaction",
      action: req.path.split("/")[3] === "like" ? "like" : "dislike",
    };
    res.status(201).json(savedReaction);
    return next();
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
const countReaction = async (req, res) => {
  let reaction = req.path.split("/")[4] === "like" ? "like" : "dislike";
  console.log(reaction);
  const posteId = req.post._id;
  try {
    const reactions = await Reaction.countDocuments({
      reaction: reaction,
      post: posteId,
    });
    console.log(reactions);

    return res.status(200).json(reactions);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.countReaction = countReaction;
module.exports.newReaction = newReaction;
module.exports.deleteReaction = deleteReaction;
