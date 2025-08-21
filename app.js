const dotenv = require("dotenv");
dotenv.config({
    quiet: true,
});
const app = require("./src/routes/index")

const { PORT } = require("./src/config/constants");

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});