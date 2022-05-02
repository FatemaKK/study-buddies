\c study_buddies;

INSERT INTO study_groups (group_id, name, main_focus, date_formed, contact_email )
VALUES
('Geology Rocks','Geology','05/04/2022','geology@rocks.org'),
('You are Write!','Creative Writing','05/04/2022','creativewriting@write.net'),
('Politically Correct','Political Science','05/04/2022','politicallyright@polisci.org'),
('Brush it Off','Art','05/04/2022','paintit@brush.net'),
('Writing Her-Story','History','05/04/2022','herstory@womens.org');

INSERT INTO events (event_id, name, virtual_meeting_link, start_time, end_time, number_of_attendees, group_id)
VALUES
('Rocks & Minerals', 'https://zoom.us/j/3984288312','11:00','13:00', 1),
('Write it Out','https://zoom.us/j/3984288316','14:00','16:00, 2'),
('Environmental Problems and American Politics','https://zoom.us/j/3984288319', '15:30', '17:00', 3),
('Making Monet','https://zoom.us/j/3984288322','13:30', '15:00', 4),
('Women & The Workforce', 'https://zoom.us/j/3984288344','16:00', '17:30', 5);




