\c study_buddies;

INSERT INTO groups ( id, name, main_focus, date_formed, contact_email, active )
VALUES
('1','Geology Rocks','Geology','05/04/2022','geology@rocks.org', true),
('2','You are Write!','Creative Writing','05/04/2022','creativewriting@write.net', false),
('3','Politically Correct','Political Science','05/04/2022','politicallyright@polisci.org', true),
('4','Brush it Off','Art','05/04/2022','paintit@brush.net', false),
('5','Writing Her-Story','History','05/04/2022','herstory@womens.org', true);

INSERT INTO events ( id, name, virtual_meeting_link, start_time, end_time, number_of_attendees, group_id)
VALUES
('1', 'Rocks & Minerals', 'https://zoom.us/j/3984288312','11:00','13:00', 10, 1),
('2', 'Write it Out','https://zoom.us/j/3984288316','14:00','16:00', 22, 2),
('3', 'Environmental Problems and American Politics','https://zoom.us/j/3984288319', '15:30', '17:00', 14, 3),
('4', 'Making Monet','https://zoom.us/j/3984288322','13:30', '15:00', 12, 4),
('5', 'Women & The Workforce', 'https://zoom.us/j/3984288344','16:00', '17:30', 6, 5);




