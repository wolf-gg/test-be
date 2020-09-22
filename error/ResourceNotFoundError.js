class ResourceNotFoundError extends Error {
    constructor() {
        super();

        this.code = 404;
        this.message = 'Resource not found';
    }
}

module.exports = ResourceNotFoundError;
