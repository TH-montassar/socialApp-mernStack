module.exports.isPostOwner = (req, res, next) => {
  console.log("post author", req.post.author);
  console.log("user", req.verifiedUser._id);
  if (req.post.author.toString() === req.verifiedUser._id) {
    next();
  } else {
    return res.status(403).json("not your post owner");
  }
};
