const React = require("../models/react.models");

const newReact = async (req, res) => {
  try {
    const newReact = new React({
      author: req.verifiedUser._id,

  
      react: req.path.split("/")[3] === "like" ? "like" : "dislike",
      post: req.post._id,
    });

    const savedComment = await newReact.save();

    return res.status(201).json(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};






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





module.exports.deleteReact = deleteReact;
