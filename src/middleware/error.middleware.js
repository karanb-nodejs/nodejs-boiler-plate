const errorHandler = (err, req, res, next) => {
    console.error("🔥 Error:", err);

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // MySQL Duplicate Entry Error
    if (err.code === "ER_DUP_ENTRY") {
        statusCode = 400;
        message = "Duplicate entry detected";
    }

    // Unauthorized errors
    if (err.name === "UnauthorizedError") {
        statusCode = 401;
        message = "Unauthorized access";
    }

    return res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Show stack in dev mode only
    });
};

module.exports = errorHandler;
