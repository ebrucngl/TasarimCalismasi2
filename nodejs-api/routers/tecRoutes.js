const express = require("express");
const router = express.Router();
const tecController = require("../controllers/tecControllers.js");

router.post("/register",tecController.createUser);
router.post("/login",tecController.loginUser);
router.get("/me",tecController.getUser);

module.exports = router;