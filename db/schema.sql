DROP DATABASE IF EXISTS study_buddies;
CREATE DATABASE study_buddies;

\c study_buddies;

DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    main_focus TEXT,
    date_formed TEXT,
    contact_email TEXT
);

DROP TABLE IF EXISTS events;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    virtual_meeting_link TEXT,
    start_time TEXT,
    end_time TEXT,
    number_of_attendees INTEGER,
    group_id INTEGER REFERENCES study_groups(id)
);