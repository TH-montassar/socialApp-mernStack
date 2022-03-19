const Activity = require("../models/activity.models");
const Comment = require("../models/comment.models");

const createComment = async (req, res) => {
  const newComment = new Comment({
    content: req.body.content,
    author: req.verifiedUser._id,
    post: req.post._id,
  });
console.log(newComment)
  try {
    const savedComment = await newComment.save();
    // const newActivity = new Activity({
    //   activity: savedComment._id,
    //   activityModel: "Comment",
    //   user: req.verifiedUser._id,
    // });
    // const savedActivity = await newActivity.save();
    return res.status(201).json(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createCommentReplay = async (req, res) => {
  const previousComment = req.comment._id;

  const newComment = new Comment({
    content: req.body.content,
    author: req.verifiedUser._id,
    comment: previousComment,
    post: req.post._id,
  });

  try {
    const savedComment = await newComment.save();

    return res.status(201).json(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = req.comment;

    const updateComment = await Comment.findByIdAndUpdate(
      comment._id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updateComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getComment = async (req, res) => {
  try {
    const comment = req.comment;
    return res.status(200).json(comment);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getComments = async (req, res) => {
  try {
    const Comments = await Comment.find();

    return res.status(200).json(Comments);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//filterComment

const deleteComment = async (req, res) => {
  try {
    const comment = req.comment;
    const deleteComment = await comment.delete();
    //const deleteComment = await Comment.findByIdAndDelete(comment._id)

    return res.status(200).json("deleteComment");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createComment = createComment;
module.exports.createCommentReplay = createCommentReplay;

module.exports.updateComment = updateComment;

module.exports.getComment = getComment;
module.exports.getComments = getComments;
module.exports.deleteComment = deleteComment;
