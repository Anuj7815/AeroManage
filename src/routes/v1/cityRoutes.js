const express = require("express");
const router = express.Router();
const { CityController } = require("../../controllers");
// const { AirplaneMiddleware } = require("../../middlewares");

//  /api/v1/airplanes               POST Request
router.post("/", CityController.createCity);

module.exports = router;
