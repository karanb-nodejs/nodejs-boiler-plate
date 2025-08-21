class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;

        // Maintain proper stack trace in V8 engines
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ApiError;
