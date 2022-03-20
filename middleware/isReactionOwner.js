module.exports.isReactionOwner = (req, res, next) => {
  console.log("reaction author", req.reaction.author);
  //! user indifined 😢😢
  console.log("user", req.verifiedUser);
  if (req.reaction.author.toString() === req.verifiedUser._id) {
    next();
  } else {
    return res.status(403).json("not your reaction owner");
  }
};
