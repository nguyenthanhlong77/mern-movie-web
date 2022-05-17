require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(400).json({
      success: false,
      messeage: "Access token not found",
    });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      messease: "Invalid token",
    });
  }
};

const checkAdmin = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeder.split(" ")[1];
  const role = jwt.decode(token).role;

  if (role != "admin") {
    return res.status(200).json({
      success: false,
      message: "User is not admin",
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "User is admin",
    });
    next();
  }
};

module.exports = verifyToken;
