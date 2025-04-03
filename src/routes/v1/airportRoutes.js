const express = require("express");
const router = express.Router();
const { AirportController } = require("../../controllers");
const { AirportMiddleware } = require("../../middlewares");

//  /api/v1/airports               POST Request
router.post(
    "/",
    AirportMiddleware.validateCreateRequest,
    AirportController.createAirport
);

//  /api/v1/airports               GET Request
router.get("/", AirportController.getAirports);

//  /api/v1/airports/:id           GET Request
router.get("/:id", AirportController.getAirport);

//  /api/v1/airports/:id           DELETE Request
router.delete("/:id", AirportController.desrtroyAirport);

//  /api/v1/airports/:id           PATCH Request
router.patch("/:id", AirportController.updateAirport);

module.exports = router;
