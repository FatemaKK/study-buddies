// const db = require("../db/dbConfig");

// const getEvents = async (eid) => {
//   try {
//     const events = await db.one("SELECT * FROM events WHERE id=$1", eid);
//     return events;
//   } catch (error) {
//     return error;
//   }
// };

// const updateEvent = async (eid, event) => {
//   let {
//     name,
//     virtual_meeting_link,
//     start_time,
//     end_time,
//     number_of_attendees,
//     group_id,
//   } = event;
//   try {
//     const updatedEvent = await db.one(
//       "UPDATE events SET name=$2, virtual_meeting_link=$3, start_time=$4, end_time=$5, number_of_attendees=$6, group_id=$7 WHERE id=$1 RETURNING *",
//       [
//         name,
//         virtual_meeting_link,
//         start_time,
//         end_time,
//         number_of_attendees,
//         group_id,
//         eid,
//       ]
//     );
//     return updatedEvent;
//   } catch (error) {
//     return error;
//   }
// };

// module.exports = {
//   getEvents,
//   updateEvent,
// };
