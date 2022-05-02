DROP DATABASE IF EXISTS study_buddies;
CREATE DATABASE study_buddies;

\c study_buddies;

DROP TABLE IF EXISTS study_groups;

CREATE TABLE study_groups (
    group_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    main_focus TEXT,
    date_formed TEXT,
    contact_email TEXT,
);

DROP TABLE IF EXISTS events;

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    virtual_meeting_link TEXT,
    start_time TEXT,
    end_time TEXT,
    number_of_attendees INTEGER,
    FOREIGN KEY group_id REFERENCES study_groups(group_id)
);