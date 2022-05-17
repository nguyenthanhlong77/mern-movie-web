require("dotenv").config();

const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

// @route POST api/auth/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  // Simble validation
  if (!username || !password || !email)
    return res.status(400).json({
      success: false,
      messeage: "Missing username and/or password and/or email",
    });

  try {
    // Check for existing user

    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, messeage: "Username already taken" });

    // Check for existing email
    const user2 = await User.findOne({ email });
    if (user2)
      return res
        .status(400)
        .json({ success: false, messeage: "Email already taken" });

    // All good
    const hashedPassword = await argon2.hash(password);

    const newUser = new User({
      username,
      password: hashedPassword,
      email: email,
    });
    await newUser.save();

    // Return token
    const accessToken = jwt.sign(
      { userID: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      messeage: "User created successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: `${error.message}`,
    });
  }
});

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  // Simble validation
  if (!username || !password || !email)
    return res.status(400).json({
      success: false,
      messeage: "Missing username and/or password and/or email",
    });
  try {
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });

    // Username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });

    // All good
    // Return token
    const accessToken = jwt.sign(
      { userID: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      messeage: "Login successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: `${error.message}`,
    });
  }
});

module.exports = router;
