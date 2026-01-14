// src/routes/index.js
import express from "express";

const router = express.Router();

// Example placeholder route
router.get("/", (req, res) => {
  res.json({ message: "AgriPoint API is running" });
});

export default router; // <-- THIS is the key
