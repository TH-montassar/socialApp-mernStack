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




const getReactsByPost = async (req, res) => {
  const postId = req.post._id;
  console.log(postId);
  try {
    const react = await React.find({ post: postId });
    //! consol undefined but it work 😒
    console.log(react.react);

    const reactLength = react.length;
    if (reactLength === 0) {
      return res.status(401).json("no react for this post");
    }

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




module.exports.getReactsByPost = getReactsByPost;
module.exports.deleteReact = deleteReact;
