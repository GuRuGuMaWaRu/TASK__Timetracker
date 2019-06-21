const mongoose = require("mongoose");

// import environmental variables
require("dotenv").config({ path: "variables.env" });

// connect to database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.connection.on("error", err => {
  console.error(`There was an error: ${err.message}`);
});

// import model
require("./models/Task");

// start app
const app = require("./app");
app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});
