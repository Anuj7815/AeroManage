const { AirplaneRepository } = require("../repositories");
const airplaneRepository = new AirplaneRepository();
const AppError = require("../utils/error/appError");
const { StatusCodes } = require("http-status-codes");

const createAirplane = async (data) => {
    try {
        console.log("Inside Airplane services", data);
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "Cannot create a new Airplane object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

const getAirplanes = async () => {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError(
            "Cannot fetch data of all the airplanes",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

const getAirplane = async (id) => {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airplane you requested is not present",
                error.statusCode
            );
        }
    }
};

const destroyAirplane = async (id) => {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airplane you delete is not present",
                error.statusCode
            );
        }
    }
};

const updateAirplane = async (capacity, id) => {
    try {
        console.log(".inside service.", data);
        const response = await airplaneRepository.update(capacity, id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The Airplane you requested to update is not found",
                error.statusCode
            );
        }
    }
};

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
};
