const { BASE_URL } = require("../../config/constants");

const uploadDocumentsService = (files) => {
    if (!files || files.length === 0) {
        throw new Error("No files uploaded");
    }
    return files.map(file => ({
        filename: file.filename,
        path: `${BASE_URL}public/${file.filename}`,
        mimetype: file.mimetype,
        size: file.size
    }));
};

module.exports = { uploadDocumentsService };