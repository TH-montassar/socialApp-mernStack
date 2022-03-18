module.exports.isReactOwner = (req, res, next) => {
  console.log("react author", req.react.author);
  console.log("user", req.verifiedUser._id);
  if (req.react.author == req.verifiedUser._id) {
    next();
  } else {
    return res.status(403).json("not your react owner");
  }
};
