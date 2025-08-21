const express = require("express");
const validateRequest = require("../../middleware/validateRequest");
const { login } = require("./validations");
const controller = require("./controllers");
const upload = require("../../utils/multerUtils");

const router = express.Router();

router.post("/", validateRequest(login), controller.login);

router.post("/upload-documents", upload.array("documents"), controller.uploadDocuments);

module.exports = router;