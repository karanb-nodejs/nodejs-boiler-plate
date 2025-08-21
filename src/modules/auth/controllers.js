const service = require("./services");

const login = async (req, res, next) => {
    try {
        const userData = await service.login(req.body);
        res.status(200).json({ success: true, data: userData, message: "Login successful" });
    } catch (error) {
        next(error);
    }
};

const uploadDocuments = async (req, res) => {
    try {
        const fileInfo = await service.uploadDocumentsService(req.files);
        res.status(200).json({
            success: true,
            message: "Files uploaded successfully",
            files: fileInfo
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = {
    login,
    uploadDocuments
};
