
module.exports.isImpressionOwner = (req, res, next) => {
    console.log("impression author",req.impression.author)
    console.log("user",req.verifiedUser._id)
if (req.impression.author ==req.verifiedUser._id) {
   
    next();
    
}else{
    return res.status(403).json("not your impression owner")
}
};
