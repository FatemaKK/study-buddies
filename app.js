const express = require("express");
const app = express();

const groupsController = require("./controllers/groupsController");
// const eventsController = require("./controllers/eventsController");

app.use(express.json());

app.use("/groups", groupsController);
// app.use("/events", eventsController);

app.get("/", (_, response) => {
  response.status(200).send("<h1>Study Buddies<h1>");
});

app.get("*", (_, response) => {
  response.status(404).send({ error: "Page Not Found!" });
});

module.exports = app;
