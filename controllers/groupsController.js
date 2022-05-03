const express = require("express");

const {
    getAllGroups,
    createGroup,
    getGroup,
    updateGroup,
} = require("../queries/groups");

const groups = express.Router();

groups.get("/", async (request, response) => {
  console.log("GET request to /groups");
  const groups = await getAllGroups();
  response.status(200).json(groups);
});

groups.post("/", async (request, response) => {
  const newGroup = await createGroup(request.body);
  response.status(200).json(newGroup);
});

groups.get("/:gid", async (request, response) => {
  console.log("GET request to /groups/:gid");  
  const group = await getGroup(request.params.gid);
  response.status(200).json(group);
});

groups.put("/:gid", async (request, response) => {
  const updatedGroup = await updateGroup(request.params.gid, request.body);
  response.status(200).json(updatedGroup);
})

module.exports = groups;
