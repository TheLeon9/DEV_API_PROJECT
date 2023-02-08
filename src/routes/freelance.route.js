const express = require("express");
const router = express.Router();
const freelanceController = require("../controllers/freelance.controller");
const verifyToken = require("../middlewares/verifyToken");
const verifyIsFreelance = require("../middlewares/verifyIsFreelance");
const {
  checkUserData,
  checkFreelanceData,
  validation,
} = require("../middlewares/validators");

router.get(
  "/",
  verifyToken,
  verifyIsFreelance,
  freelanceController.getFreelance
);

router.put(
  "/updateMyProfile",
  checkUserData,
  checkFreelanceData,
  validation,
  verifyToken,
  verifyIsFreelance,
  freelanceController.updateMyProfile
);
module.exports = router;
