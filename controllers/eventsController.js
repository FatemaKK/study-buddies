// const express = require("express");
// const events = express.Router();

// const { getEvents, updateEvent } = require("../queries/events");


// events.get(":/eid", async (request, response) => {
//   const events = await getEvents(request.params.eid);
//   response.status(200).json(events);
// });

// events.put(":/eid", async (request, response) => {
//   const updatedEvent = await updateEvent(request.params.eid, request.body);
//   response.status(200).json(updatedEvent);
// });

// module.exports = events;
