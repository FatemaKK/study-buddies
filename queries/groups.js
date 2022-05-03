const db = require("../db/dbConfig.js");

const getAllGroups = async () => {
  try {
    const allGroups = await db.any("SELECT * FROM groups");
    return allGroups;
  } catch (error) {
    return error;
  }
};

const createGroup = async (group) => {
  try {
    const { name, main_focus, date_formed, contact_email } = group;
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
  try {
    const { name, main_focus, date_formed, contact_email } = group;
    const updatedGroup = await db.one(
      "UPDATE Groups SET name=$2, main_focus=$3, date_formed=$4, contact_email=$5 WHERE id=$1 RETURNING *",
      [name, main_focus, date_formed, contact_email, gid]
    );
    return updatedGroup;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGroups,
  createGroup,
  getGroup,
  updateGroup
};
