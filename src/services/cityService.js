const { CityRepository } = require("../repositories");
const { SuccessResponse } = require("../utils/common");
const cityRepository = new CityRepository();
const AppError = require("../utils/error/appError");
const { StatusCodes } = require("http-status-codes");

const createCity = async (data) => {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        console.log(error);

        if (
            error.name === "SequelizeValidationError" ||
            error.name === "SequelizeUniqueConstraintError"
        ) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "Cannot create a new City object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

const destroyCity = async (data) => {
    try {
        const response = await cityRepository.destroy(data);
        return response;
    } catch (error) {
        if (error.statuscode === StatusCodes.NOT_FOUND) {
            throw new AppError("The city is not present", error.statusCode);
        }
    }
};

const updateCity = async (id, data) => {
    try {
        console.log("Inside cityservice", data, id);
        const response = await cityRepository.update(data, id);
        SuccessResponse = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        throw new AppError("The city is not present", error.statusCode);
    }
};

module.exports = {
    createCity,
    destroyCity,
    updateCity,
};
