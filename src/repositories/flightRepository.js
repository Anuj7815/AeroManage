const CrudRepository = require("./crudRepository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    getAllFlights = async (filter, sort) => {
        const response = await Flight.findAll({ where: filter, order: sort });
        return response;
    };
}

module.exports = FlightRepository;
