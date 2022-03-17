
module.exports.isProfileOwner = (req, res, next) => {
    console.log("profile id",req.profile._id)
    console.log("user",req.verifiedUser.profile)
if (req.profile._id ==req.verifiedUser.profile) {
   
    next();
    
}else{
    return res.status(403).json("not your profile")
}
};
