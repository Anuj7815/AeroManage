const express = require("express");
const router = express.Router();
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");

//  /api/v1/airplanes               POST Request
router.post(
    "/",
    AirplaneMiddleware.validateCreateRequest,
    AirplaneController.createAirplane
);

//  /api/v1/airplanes               GET Request
router.get("/", AirplaneController.getAirplanes);

//  /api/v1/airplanes/:id           GET Request
router.get("/:id", AirplaneController.getAirplane);

//  /api/v1/airplanes/:id           DELETE Request
router.delete("/:id", AirplaneController.desrtroyAirplane);

module.exports = router;
