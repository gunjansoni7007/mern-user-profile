const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Simulated taken usernames for demo (replace with DB check in real case)
const takenUsernames = ["admin", "testuser", "gunjan-verma"];

// Username Availability Check (GET)
router.get("/check-username", async (req, res) => {
  const username = req.query.username?.toLowerCase();

  if (!username || username.length < 4) {
    return res.json({ available: false });
  }

  const isTaken = takenUsernames.includes(username);
  res.json({ available: !isTaken });
});

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage });

// Submit Route (POST)
router.post('/submit', upload.single('profilePhoto'), async (req, res) => {
  try {
    const {
      username,
      currentPassword,
      newPassword,
      profession,
      companyName,
      addressLine1,
      city,
      state,
      country,
      subscriptionPlan,
      newsletter
    } = req.body;

    const profilePhoto = req.file ? req.file.filename : null;

    console.log("Form Data:", req.body);
    console.log("Uploaded File:", req.file);

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      data: {
        username,
        profession,
        profilePhoto,
        subscriptionPlan
      }
    });
  } catch (error) {
    console.error("Form submit error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
