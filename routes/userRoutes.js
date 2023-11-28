const express = require("express");
const { getAllUser, registerUser } = require("../controllers/userControllers");
const router = express.Router();

router.get("/", getAllUser);
router.post("/", registerUser);

module.exports = router;
