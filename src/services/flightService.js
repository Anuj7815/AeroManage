const { FlightRepository } = require("../repositories");
const flightRepository = new FlightRepository();
const AppError = require("../utils/error/appError");
const { StatusCodes } = require("http-status-codes");
const compareTime = require("../utils/helpers/datetimeHelpers");
const { Op } = require("sequelize");

const createFlight = async (data) => {
    try {
        if (compareTime(data.departureTime, data.arrivalTime)) {
            throw new AppError(
                "Arrival time cannot be smaller than the departure time",
                StatusCodes.BAD_REQUEST
            );
        }
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }

        if (error.name === "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "Cannot create a new flight object..",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

const getAllFlights = async (query) => {
    let customFilter = {};
    let sortFilter = [];
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;

        //add a check that departureAiportId!==arrivalAirportId
    }

    if (query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, maxPrice === undefined ? 20000 : maxPrice],
        };
    }

    if (query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers,
        };
    }

    if (query.tripDate) {
        const startOfDay = new Date(`${query.tripDate}T00:00:00`);
        const endOfDay = new Date(`${query.tripDate}T23:59:59`);

        customFilter.departureTime = {
            [Op.between]: [startOfDay, endOfDay],
        };
    }

    if (query.sort) {
        const params = query.sort.split(",");
        const sortFilters = params.map((param) => param.split("_"));
        sortFilter = sortFilters;
    }

    console.log(sortFilter);
    try {
        const flights = await flightRepository.getAllFlights(
            customFilter,
            sortFilter
        );
        if (flights.length === 0) {
            throw new AppError(
                "No flights available for this route.",
                StatusCodes.BAD_REQUEST
            );
        }
        return flights;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError(
            "Cannot fetch data of all the flights",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

module.exports = {
    createFlight,
    getAllFlights,
    // getAirports,
    // getAirport,
    // destroyAirport,
    // updateAirport,
};
