-- init_db.sql

INSERT INTO user (type, name, email, hashed_password)
VALUES 
-- password: restos123
('association', 'Les Restos du Code', 'contact@restoscode.org', '$2b$12$V6fo9OSCe/SN5S7NEbvKwu2edtNELzvzcfsfT3tz1pGW/XF2GLQqO'),

-- password: sauver456
('association', 'Sauver la Data', 'hello@sauverdata.org', '$2b$12$wcI1kCnOz/WVJB5QRQmf/O.mzBj5pzd4/yH/tMxJGMUkGRUrxQCdy'),

-- password: nina789
('benevole', 'Nina Dev', 'nina@example.com', '$2b$12$sipuk.0UGx0CnuoUUculI.ghHZRwqj.46wRXlxEvNSQApez54AAPK'),

-- password: jean000
('benevole', 'Jean Dupont', 'jean.dupont@example.com', '$2b$12$kphcqFstX7rVyM596DSD1eM5dtNkaVIfLJfNo1l9j78bk0m6e7MQK'),
-- password: marie111
('benevole', 'Marie Curieuse', 'marie.curieuse@example.com', '$2b$12$pD9LHEi3Q7LC7e39xy0Af.t6c0gwADzKdZdQDFveAEceHwe59rgvC');


INSERT INTO missions (title, descrip_Mission, date_mission, id_user)
VALUES
('Développement d’un site vitrine', 'Créer un site web pour présenter les actions de l’association.', '2025-09-20', 1),
('Organisation d’un hackathon solidaire', 'Aider à organiser un hackathon pour lever des fonds.', '2025-10-05', 2),
('Campagne de communication sur réseaux sociaux', 'Soutenir l’association en créant du contenu pour Instagram et Facebook.', '2025-09-25', 1);


INSERT INTO candidature (date_candidature, status, id_user, id_mission)
VALUES
('2025-09-11', 'en attente', 3, 1), 
('2025-09-11', 'en attente', 4, 2), 
('2025-09-11', 'acceptee', 5, 3),   
('2025-09-11', 'refusee', 4, 1);  

