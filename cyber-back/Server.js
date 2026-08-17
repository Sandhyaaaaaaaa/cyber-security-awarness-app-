const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/cyberapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Route: Register a new user
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Optional: Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    console.log("✅ User Registered:", newUser);
    res.status(201).json({ message: "User registered successfully", user: newUser });

  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(400).json({ error: "Registration failed" });
  }
});

// Route: Test insertion to database
app.get("/test-insert", async (req, res) => {
  try {
    const testUser = new User({
      username: "TestUser",
      email: "test@example.com",
      password: "123456"
    });

    await testUser.save();
    res.send("✅ Test User Inserted");
  } catch (error) {
    console.error("❌ Test Insert Error:", error);
    res.status(500).send("Failed to insert test user");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
