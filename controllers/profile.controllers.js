const Profile = require("../models/profile.models");

const getProfile = async (req, res) => {
  const profileId = req.profile._id.toString();
  const user=req.user.profile.toString()
  console.log(profileId)
  console.log(user)
 
  try {
if (profileId===user) {
  const profile = await Profile.findById(profileId);
  return res.status(200).json(profile);
}else{
  return res.status(404).json("not found profile for this user");
}



   
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getOwnedProfile = async (req, res) => {
  const profileId = req.verifiedUser.profile;
  console.log(profileId);
  try {
    const profile = await Profile.findById({ _id: profileId });
    console.log(profile);
    return res.status(200).json(profile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateProfile = async (req, res) => {
  const profile = req.profile;
  try {
    const updateProfile = await Profile.findByIdAndUpdate(
      profile._id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updateProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getProfile = getProfile;
module.exports.updateProfile = updateProfile;
module.exports.getOwnedProfile = getOwnedProfile;
