const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /airports
  req-body {name: 'Jaipur,code: 'JPR',address: 'XYZ',cityId : 231}
 */
const createAirport = async (req, res) => {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        });
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

/**
 * GET: /airports
 req-body {}
 */
const getAirports = async (req, res) => {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

/**
 * GET: /airports/:id
 req-body {}
 */
const getAirport = async (req, res) => {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

/**
 * DELETE: /airports/:id
 req-body {}
 */
const desrtroyAirport = async (req, res) => {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

/**
 * PATCH: /airports/:id
 req-body {}
 */
const updateAirport = async (req, res) => {
    try {
        const airport = await AirportService.updateAirport(
            req.params.id,
            req.body
        );
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
};

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    desrtroyAirport,
    updateAirport,
};
