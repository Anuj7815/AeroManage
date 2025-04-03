const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/appError");

const validateCreateRequest = (req, res, next) => {
    if (!req.body.name) {
        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError(
            "Name not found while creating airport",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (!req.body.code) {
        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError(
            "Code not found while creating airport",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (!req.body.cityId) {
        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError(
            "CityID not found while creating airport",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = { validateCreateRequest };
