const db = require("../db/dbConfig");

const getAllGroups = async () => {
  try {
    const allGroups = await db.any("SELECT * FROM groups");
    return allGroups;
  } catch (error) {
    return error;
  }
};

const createGroup = async (group) => {
  let { name, main_focus, date_formed, contact_email } = group;
  try {
    const newGroup = await db.one(
      "INSERT INTO groups (name, main_focus, date_formed, contact_email) VALUES ($1, $2, $3, $4) RETURNING * ",
      [name, main_focus, date_formed, contact_email]
    );
    return newGroup;
  } catch (error) {
    return error;
  }
};

const getGroup = async (gid) => {
  try {
    const group = await db.one("SELECT * FROM groups WHERE id=$1", gid);
    return group;
  } catch (error) {
    return error;
  }
};

const updateGroup = async (gid, group) => {
  let { name, main_focus, date_formed, contact_email } = group;
  try {
    const updatedGroup = await db.one(
      "UPDATE groups SET name=$2, main_focus=$3, date_formed=$4, contact_email=$5 WHERE id=$1 RETURNING *",
      [name, main_focus, date_formed, contact_email, gid]
    );
    return updatedGroup;
  } catch (error) {
    return error;
  }
};

const getGroupEvents = async (gid) => {
  const groupEvents = await db.any(
    "SELECT * FROM events WHERE group_id=$1",
    gid
  );
  return groupEvents;
};

const createEvent = async (event) => {
  let {
    name,
    virtual_meeting_link,
    start_time,
    end_time,
    number_of_attendees,
    group_id,
  } = event;
  try {
    const newEvent = await db.one(
      "INSERT INTO events (name, virtual_meeting_link, start_time, end_time, number_of_attendees, group_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        name,
        virtual_meeting_link,
        start_time,
        end_time,
        number_of_attendees,
        group_id,
      ]
    );
    return newEvent;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGroups,
  createGroup,
  getGroup,
  updateGroup,
  getGroupEvents,
  createEvent,
};
