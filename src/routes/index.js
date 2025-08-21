const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("../middleware/error.middleware");

const auth_routes = require("../modules/auth/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// API Routes
app.use("/api/auth", auth_routes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Request not found", details: req.originalUrl });
});

// Error Handler
app.use(errorHandler);

module.exports = app;