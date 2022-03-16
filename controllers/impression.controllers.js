const Impression = require("../models/impression.models");

const newLike = async (req, res) => {
  try {
     
    const impression = await Impression.findOne({
      post: req.body.post,
      author: req.verifiedUser._id,
    });
   
    if (impression.impression ==="like") {
      return res.status(422).json(" already like this post");
    }
  } catch (err) {
    return res.status(500).json(err);
  }

  try {
    const newImpression = new Impression({
      author: req.verifiedUser._id,
      impression: "like",
      post: req.body.post,
    });

    const savedComment = await newImpression.save();

    return res.status(201).json(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const dislike = async (req, res) => {
  const ImpressionId = req.params.ImpressionId;
  try {
    const dislike = await Impression.findByIdAndUpdate(
      ImpressionId,
      { impression: "dislike" },
      { new: true }
    );
    return res.status(200).json(dislike);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const like = async (req, res) => {
    const ImpressionId = req.params.ImpressionId;
    try {
      const like = await Impression.findByIdAndUpdate(
        ImpressionId,
        { impression: "like" },
        { new: true }
      );
      return res.status(200).json(like);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  




const getImpressions = async (req, res) => {
  try {
    const impression = await Impression.find();

    return res.status(200).json(impression);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//filterComment

const deleteImpression = async (req, res) => {
    const ImpressionId = req.params.ImpressionId;
    try {
      const deleteImpression = await Impression.findByIdAndDelete(ImpressionId);
      return res.status(200).json(deleteImpression);
    } catch (err) {
      return res.status(500).json(err);
    }
  };;

module.exports.newLike = newLike;
module.exports.dislike = dislike;
module.exports.like = like;
module.exports.getImpressions = getImpressions;
module.exports.deleteImpression = deleteImpression;
getImpressions

