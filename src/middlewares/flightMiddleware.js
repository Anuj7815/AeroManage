const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/appError");

const validateCreateRequest = (req, res, next) => {
    console.log(req.body);
    if (!req.body.flightNumber) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Flight Number not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (!req.body.airplaneId) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Airplane ID not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (!req.body.departureAirportId) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Departure Airport ID not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Arrival Airport ID not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.arrivalTime) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Arrival Time not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.departureTime) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Departure Time not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.price) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Price not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.totalSeats) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError(
            "Total Seats not found while creating flight",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = { validateCreateRequest };
