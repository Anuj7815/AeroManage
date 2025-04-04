const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /flights
  req-body {
    flightNumber: 'UK808',
    airplaneId: 'a380',
    departureAirportId: 12,
    arrivalAirportId: 11,
    arrivalTime: '11:10:00',
    departureTime: '09:10:00',
    price: 3000,
    boardingGate: '12A',
    totalSeats: 400
  }
 */
const createFlight = async (req, res) => {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });
        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

const getAllFlights = async (req, res) => {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

module.exports = {
    createFlight,
    getAllFlights,
    // getAirports,
    // getAirport,
    // desrtroyAirport,
    // updateAirport,
};
