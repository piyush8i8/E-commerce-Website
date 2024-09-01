import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Please login again." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userData = await userModel.findById(decoded.id);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Error verifying token" });
  }
};

export default authMiddleware;
