// server/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });
// console.log("✅ Access Token:", process.env.INSTAGRAM_ACCESS_TOKEN);
// console.log("✅ IG User ID:", process.env.IG_USER_ID); 
const autoPost = require("./cron/autoPost");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Test Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Start cron job
autoPost();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
