
module.exports.isCommentOwner = (req, res, next) => {
    console.log("comment author",req.comment.author)
    console.log("user",req.verifiedUser._id)
if (req.comment.author ==req.verifiedUser._id) {
   
    next();
    
}else{
    return res.status(403).json("not your comment owner")
}
};
