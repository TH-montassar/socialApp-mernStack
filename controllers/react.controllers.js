const react = require("../models/react.models");

const newReact = async (req, res) => {
  try {
    const newReact = new react({
      author: req.verifiedUser._id,
      react: req.path.split("/")[2] === "like" ? "like" : "dislike",
      post: req.post._id,
    });

    const savedComment = await newReact.save();

    return res.status(201).json(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const dislike = async (req, res) => {
  const reactId = req.params.reactId;
  try {
    const dislike = await react.findByIdAndUpdate(
      reactId,
      { react: "dislike" },
      { new: true }
    );
    return res.status(200).json(dislike);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getReacts = async (req, res) => {
  try {
    const react = await react.find();

    return res.status(200).json(react);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//filterComment

const deleteReact = async (req, res) => {
  const react = req.react;
  try {
    const deleteReact = await react.findByIdAndDelete(react._id);
    return res.status(200).json(deleteReact);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.newReact = newReact;
module.exports.dislike = dislike;

module.exports.getReacts = getReacts;
module.exports.deleteReact = deleteReact;
