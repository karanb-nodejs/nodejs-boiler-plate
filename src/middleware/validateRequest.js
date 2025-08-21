const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({ ...req.body, ...req.query, ...req.params }, { abortEarly: false, stripUnknown: true });
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation error",
                details: error.details.map((err) => err.message),
            });
        }
        next();
    };
};

module.exports = validateRequest;