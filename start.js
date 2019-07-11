const mongoose = require("mongoose");

// import environmental variables
// require("dotenv").config({ path: "variables.env" });

// connect to database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
mongoose.connection.on("error", err => {
  console.error(`There was an error: ${err.message}`);
});

// import model
require("./models/Task");

// start app
const app = require("./app");
app.set("port", process.env.PORT || 5000);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = app.listen(app.get("port"), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});
