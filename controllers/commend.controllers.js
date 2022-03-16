const Comment = require("../models/comment.models");

const createComment = async (req, res) => {
  const newComment = new Comment({
    content: req.body.content,
    author: req.verifiedUser._id,
    comment: req.body.comment,
    post: req.body.post,
  });

  try {
    const savedComment = await newComment.save();

    return res.status(201).json(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateComment = async (req, res) => {
  const id = req.params.commentId;

  try {
    const updateComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getComment = async (req, res) => {
  const id = req.params.commentId;
  try {
    const getComment = await Comment.findById(id);
    return res.status(200).json(getComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getComments = async (req, res) => {

  try {
    const Comments = await Comment.find()
   
    return res.status(200).json(Comments);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//filterComment

const deleteComment = async (req, res) => {
  const id = req.params.commentId;
  try {
    const deleteComment = await Comment.findByIdAndDelete(id);
    return res.status(200).json(deleteComment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createComment = createComment;
module.exports.updateComment = updateComment;

module.exports.getComment = getComment;
module.exports.getComments = getComments;
module.exports.deleteComment = deleteComment;
