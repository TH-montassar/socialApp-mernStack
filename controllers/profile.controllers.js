const Profile = require("../models/profile.models");

const getOwnedProfile = async (req, res) => {
  const profileId = req.verifiedUser.profile;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);

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




module.exports.getOwnedProfile = getOwnedProfile;
module.exports.updateProfile = updateProfile;

