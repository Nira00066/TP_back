-- init_db.sql

INSERT INTO user (type, name, email, Password)
VALUES 
('association', 'Les Restos du Code', 'contact@restoscode.org', 'hash123'),
('association', 'Sauver la Data', 'hello@sauverdata.org', 'hash456'),
('benevole', 'Nina Dev', 'nina@example.com', 'hash789'),
('benevole', 'Jean Dupont', 'jean.dupont@example.com', 'hash000'),
('benevole', 'Marie Curieuse', 'marie.curieuse@example.com', 'hash111');


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

