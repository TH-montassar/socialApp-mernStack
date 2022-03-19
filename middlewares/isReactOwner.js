module.exports.isReactOwner = (req, res, next) => {
  console.log("react author", req.react.author);
  //! user indifined 😢😢
  console.log("user",req.verifiedUser);
  if (req.react.author.toString() === req.verifiedUser._id) {
    next();
  } else {
    return res.status(403).json("not your react owner");
  }
};
