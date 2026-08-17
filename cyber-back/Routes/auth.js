const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const LoginLog = require("../models/LoginLog"); // ⬅ Import login log model

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found or wrong password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      // Save failed login attempt
      await LoginLog.create({ email, success: false });
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Save successful login attempt
    await LoginLog.create({ email, success: true });

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});
