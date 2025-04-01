const express = require("express");
const app = express();
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes/index");

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is Running on PORT: ${ServerConfig.PORT}`);
    // Logger.info("Server started");
});

// Logger.info
// Logger.warn
// Logger.error
