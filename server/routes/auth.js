import express from "express";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// @desc    Register sync (creates user profile in MongoDB after Firebase Signup)
// @route   POST /api/v1/auth/register
// @access  Private (Requires Firebase ID Token in Authorization header)
router.post("/register", protect, async (req, res) => {
  const { uid, email, fullName, role, phone } = req.body;

  // Simple validation
  if (!uid || !email || !fullName || !role) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields: uid, email, fullName, role",
    });
  }

  try {
    // Check if user already exists in MongoDB
    let user = await User.findOne({ uid });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User profile already exists in database",
      });
    }

    // Create user profile in MongoDB
    user = await User.create({
      uid,
      email,
      fullName,
      role,
      phone: phone || "",
    });

    res.status(201).json({
      success: true,
      message: "User profile created and synced successfully",
      data: {
        id: user._id,
        uid: user.uid,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Error in /register endpoint:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error during registration sync",
      error: error.message,
    });
  }
});

// @desc    Login sync (verifies token and returns MongoDB profile)
// @route   POST /api/v1/auth/login
// @access  Private (Requires Firebase ID Token in Authorization header)
router.post("/login", protect, async (req, res) => {
  try {
    // Find user in MongoDB using decoded token uid
    const user = await User.findOne({ uid: req.user.uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User profile not found in MongoDB database. Please register first.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login sync successful",
      data: {
        id: user._id,
        uid: user.uid,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Error in /login endpoint:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error during login sync",
      error: error.message,
    });
  }
});

// @desc    Get current user profile from MongoDB
// @route   GET /api/v1/auth/me
// @access  Private (Requires Firebase ID Token in Authorization header)
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User profile not found in database",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        uid: user.uid,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Error in /me endpoint:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error fetching profile",
      error: error.message,
    });
  }
});

export default router;
