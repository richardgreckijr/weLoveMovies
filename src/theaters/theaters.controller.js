const service = require('./theaters.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

// Request to retrieve all theaters
const list =
    async (req, res) => {
        const data = await service.list()
        res.json({ data })
    };

module.exports = {
    list: asyncErrorBoundary(list),
}