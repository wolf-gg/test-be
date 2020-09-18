const { validationResult } = require('express-validator');

const {
    ValidationError
} = require('../error');

module.exports = (req, res, next) => {
    const errors = validationResult(req);

    const errorMessages = errors.array().map((error) => ({ [error.param]: error.msg }));

    if (!errors.isEmpty()) {
        throw new ValidationError(errorMessages);
    }

    return next();
};
