const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/index");
const errorHandlers = require("./handlers/errorHandlers");

// create express app
const app = express();

// serve up static files
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// takes raw requests and turn them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle routes
app.use("/", routes);

// error handlers
// app.use(errorHandlers.notFound);

// if (app.get("env") === "development") {
//   app.use(errorHandlers.developmentErrors);
// }

// app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
