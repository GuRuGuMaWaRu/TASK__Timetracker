const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/index");
const errorHandlers = require("./handlers/errorHandlers");

// create express app
const app = express();

// take raw requests and turn them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// handle routes
app.use("/", routes);

// serve up static files
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// error handlers
// app.use(errorHandlers.notFound);

// if (app.get("env") === "development") {
//   app.use(errorHandlers.developmentErrors);
// }

// app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
