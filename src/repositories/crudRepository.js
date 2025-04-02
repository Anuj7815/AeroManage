const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const AppError = require("../utils/error/appError");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        console.log("Inside CrudRepository");
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data,
            },
        });
        if (!response) {
            throw new AppError(
                "Not able to find the resource",
                StatusCodes.NOT_FOUND
            );
        }
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if (!response) {
            throw new AppError(
                "Not able to find the resource",
                StatusCodes.NOT_FOUND
            );
        }
        return response;
    }

    async getAll() {
        console.log("insidegetAll");
        const response = await this.model.findAll();
        return response;
    }

    async update(data, id) {
        console.log(data);
        console.log(typeof id);
        id = parseInt(id);
        console.log(typeof id);
        const response = await this.model.update(data, {
            where: {
                id: id,
            },
        });
        console.log(this.model.name, ".....");
        console.log("erfegbvdsefd", response);
        if (response[0] === 0) {
            throw new AppError(
                "Not able to find the resource",
                StatusCodes.NOT_FOUND
            );
        }
        return response;
    }
}

module.exports = CrudRepository;
