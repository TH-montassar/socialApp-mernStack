module.exports.isReactionOwner = (req, res, next) => {
  console.log("reaction author", req.reaction.author.toString());

  console.log("user", req.verifiedUser._id);
  if (req.reaction.author.toString() !== req.verifiedUser._id) {
    return res.status(403).json("not your reaction owner");
  }
  next();
};
