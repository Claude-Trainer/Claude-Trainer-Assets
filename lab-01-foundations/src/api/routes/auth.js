const express = require("express");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/User");

const router = express.Router();

// POST /api/auth/signup
// NOTE: This endpoint currently has NO email validation.
// Students will add validation as their first Claude Code task.
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: { code: "MISSING_FIELDS", message: "Name, email, and password are required" },
    });
  }

  if (password.length < 6) {
    return res.status(422).json({
      error: { code: "WEAK_PASSWORD", message: "Password must be at least 6 characters" },
    });
  }

  const existingUser = User.findByEmail(email);
  if (existingUser) {
    return res.status(409).json({
      error: { code: "EMAIL_EXISTS", message: "An account with this email already exists" },
    });
  }

  const user = User.create({ id: uuidv4(), name, email, password });

  // In a real app, you'd hash the password and generate a JWT.
  // For this lab, we return a simple token.
  const token = Buffer.from(`${user.id}:${Date.now()}`).toString("base64");

  res.status(201).json({
    data: {
      user: { id: user.id, name: user.name, email: user.email },
      token,
    },
  });
});

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: { code: "MISSING_FIELDS", message: "Email and password are required" },
    });
  }

  const user = User.findByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({
      error: { code: "INVALID_CREDENTIALS", message: "Invalid email or password" },
    });
  }

  const token = Buffer.from(`${user.id}:${Date.now()}`).toString("base64");

  res.json({
    data: {
      user: { id: user.id, name: user.name, email: user.email },
      token,
    },
  });
});

module.exports = router;
