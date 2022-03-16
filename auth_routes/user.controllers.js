const User = require("../models/user.models");
const Profile = require("../models/profile.models");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(422).json("Email already exist");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
  try {
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //! creation Profile
    const newProfile = new Profile();
    const savedProfile = await newProfile.save();
    //!------

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      number: req.body.number,
      password: hashedPassword,
      profile: savedProfile._id,
    });

    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }); //jib l user 7asem email(email 5ater tlabto fel postman))client

    if (!user) {
      return res.status(401).json("wrong email or password ");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    ); //dicripte ll pass wo y9arno m3a lelli da5lo luser

    if (!isPasswordValid) {
      return res.status(401).json("wrong password or email");
    }

    const token = jwt.sign(
      /* payload */ {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        profile: user.profile,
        isAdmin: user.isAdmin,
      },
      process.env.TOKEN_KEY,
      { expiresIn: "3 days" }
    );

    return res.status(200).json({ user: user, token: token });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json(err);
  }
});

module.exports = router;
