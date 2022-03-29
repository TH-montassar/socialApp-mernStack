module.exports.isReceiver = (req, res, next) => {
  const relationshipReceiver = req.relationship.receiver.toString();

  const currentUser = req.verifiedUser._id;
  console.log(currentUser);
  if (relationshipReceiver === currentUser) {
    next();
  } else {
    return res.status(403).json("your sender you can't accepted you'r self ");
  }
};
