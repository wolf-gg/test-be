const {
    ValidationError,
    ResourceNotFoundError
} = require('../error');

const sendErrorResponse = (code, message, addOns) => ({
    code,
    message,
    ...addOns
});

const global = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.send(sendErrorResponse(err.code, err.message, { errors: err.errors }));
    } else if (err instanceof ResourceNotFoundError) {
        res.send(sendErrorResponse(err.code, err.message));
    } else {
        next();
    }
};

const internal = (req, res) => {
    res.send({
        code: 500,
        message: 'Internal server error'
    });
};

module.exports = {
    global,
    internal
};
