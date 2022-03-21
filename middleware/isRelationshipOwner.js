module.exports.isRelationshipOwner = (req, res, next) => {
  const relationshipReceiver = req.relationship.receiver.toString();
  const relationshipSender = req.relationship.sender.toString();
  const currentUser = req.verifiedUser._id;
  console.log(currentUser);
  if (
    relationshipReceiver === currentUser ||
    relationshipSender === currentUser
  ) {
    next();
  } else {
    return res.status(403).json(" not you relationship ");
  }
};
