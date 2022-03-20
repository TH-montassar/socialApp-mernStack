const { activity } = require("./activity");
const { isCommentOwner } = require("./isCommentOwner");
const { isPostOwner } = require("./isPostOwner");
const { isProfileOwner } = require("./isProfileOwner");
const { isReactionOwner } = require("./isReactionOwner");
const { isReactsPost } = require("./isReactsPost");
const verifyToken = require("./verifyToken");

module.exports.activity = activity;
module.exports.isCommentOwner = isCommentOwner;
module.exports.isPostOwner = isPostOwner;
module.exports.isProfileOwner = isProfileOwner;
module.exports.isReactionOwner = isReactionOwner;
module.exports.isReactsPost = isReactsPost;
module.exports.verifyToken = verifyToken; 
