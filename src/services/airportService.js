const { AirportRepository } = require("../repositories");
const airportRepository = new AirportRepository();
const AppError = require("../utils/error/appError");
const { StatusCodes } = require("http-status-codes");

const createAirport = async (data) => {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "Cannot create a new Airport object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

const getAirports = async () => {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError(
            "Cannot fetch data of all the airports",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

const getAirport = async (id) => {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airport you requested is not present",
                error.statusCode
            );
        }
    }
};

const destroyAirport = async (id) => {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airport you delete is not present",
                error.statusCode
            );
        }
    }
};

const updateAirport = async (id, capacity) => {
    try {
        const response = await airportRepository.update(capacity, id);
        return response;
    } catch (error) {
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
            error.message || "Something went wrong during update",
            error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport,
};
