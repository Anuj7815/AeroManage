const addRowLockOnFlights = (flightId) => {
    return `SELECT *from Flights WHERE FLIGHTS.Id=${flightId} FOR UPDATE`;
};

module.exports = {
    addRowLockOnFlights,
};
