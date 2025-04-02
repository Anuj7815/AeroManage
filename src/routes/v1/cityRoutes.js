const express = require("express");
const router = express.Router();
const { CityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

//  /api/v1/cities               POST Request
router.post(
    "/",
    CityMiddleware.validateCreateRequest,
    CityController.createCity
);

// /api/v1/cities/:id           DELETE Request
router.delete("/:id", CityController.destroyCity);

// /api/v1/cities/:id           PATCH Request
router.patch("/:id", CityController.updateCity);

module.exports = router;
