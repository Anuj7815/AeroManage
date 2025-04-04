const express = require("express");
const router = express.Router();
const airplaneRoutes = require("./airplaneRoutes");
const cityRoutes = require("./cityRoutes");
const airportRoutes = require("./airportRoutes");
const flightRoutes = require("./flightRoutes");

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", flightRoutes);

module.exports = router;
