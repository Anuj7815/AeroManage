const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/appError");

const validateCreateRequest = (req, res, next) => {
    if (!req.body) {
        ErrorResponse.message = "Something went wrong while creating city";
        ErrorResponse.error = new AppError(
            "City Name not found in the incoming request",
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = { validateCreateRequest };
