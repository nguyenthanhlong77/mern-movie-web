const { Router } = require("express");

const { verifyToken, checkAdmin } = require("../middleware/auth");
const User = require("../models/User");
const Movie = require("../models/Movie");

const router = Router();

// @Router GET /api/admin/users
// @dect Get all users
// @access private
router.get("users", verifyToken, checkAdmin, async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      return res.status(200).json({
        success: true,
        users,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.export = router;
