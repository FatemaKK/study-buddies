//DEPENDENCIES
const express = require("express");
const cors = require("cors");

//CONFIGURATION
const app = express();

//ROUTES
app.get("/", (_, response) => {
  response.status(200).send("<h1>Study Buddies<h1>");
});

app.get("*", (_, response) => {
  response.status(404).send({ error: "Page Not Found!" });
});

//EXPORT
module.exports = app;
