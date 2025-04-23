const express = require("express");
const router = express.Router();
const { FlightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");

//  /api/v1/flights               POST Request
router.post(
    "/",
    FlightMiddleware.validateCreateRequest,
    FlightController.createFlight
);

//  /api/v1/flights?trips=MUM-DEL        GET Request
router.get("/", FlightController.getAllFlights);

//  /api/v1/flights/:id        GET Request
router.get("/:id", FlightController.getFlight);

//  /api/v1/flights/:id/seats        PATCH Request
router.patch(
    "/:id/seats",
    FlightMiddleware.validateUpdateSeatsRequest,
    FlightController.updateSeats
);

module.exports = router;
