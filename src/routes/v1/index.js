const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplaneRoutes");

// router.get("/info", InfoController.info);
console.log("Inside V1 routes");
router.use("/airplanes", airplaneRoutes);

module.exports = router;
