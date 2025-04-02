const express = require("express");
const router = express.Router();
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");
console.log("Inside Airplane Routes");
router.post(
    "/",
    AirplaneMiddleware.validateCreateRequest,
    AirplaneController.createAirplane
);

router.get("/", AirplaneController.getAirplanes);
router.get("/:id", AirplaneController.getAirplane);

module.exports = router;
