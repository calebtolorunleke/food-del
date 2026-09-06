const express = require("express");
const { getProfile } = require("../controller/profileController");

const router = express.Router();

router.get("/him", getProfile);

module.exports = router;
