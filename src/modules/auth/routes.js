const express = require("express");
const validateRequest = require("../../middleware/validateRequest");
const { login } = require("./validations");
const controller = require("./controllers");

const router = express.Router();

router.post("/", validateRequest(login), controller.login);

module.exports = router;