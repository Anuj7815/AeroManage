const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/appError");

const validateCreateRequest = (req, res, next) => {
    console.log("Inside validate request");
    if (!req.body.modelNumber) {
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error = new AppError([
            "Modal number not found in the incoming request in correct format",
            StatusCodes.BAD_REQUEST,
        ]);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = { validateCreateRequest };
