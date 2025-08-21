const service = require("./services");

const login = async (req, res, next) => {
    try {
        const userData = await service.login(req.body);
        res.status(200).json({ success: true, data: userData, message: "Login successful" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login
};
