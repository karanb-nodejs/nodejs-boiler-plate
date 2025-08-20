const dotenv = require("dotenv");
dotenv.config({
    quiet: true,
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = require("./src/config/db");
const { PORT } = require("./src/config/constants");

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});