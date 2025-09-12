CREATE DATABASE tp_back;

USE tp_back;

CREATE TABLE
    user (
        id INT PRIMARY KEY AUTO_INCREMENT,
        type enum ('benevole', 'association') NOT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        hashed_password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    missions (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        descrip_Mission TEXT NOT NULL,
        date_mission DATE NOT NULL,
        id_user INT,
        FOREIGN KEY (id_user) REFERENCES user(id)
    );
CREATE TABLE
    candidature (
        id INT PRIMARY KEY AUTO_INCREMENT,
        date_candidature DATE NOT NULL,
        status enum ('en attente', 'acceptee', 'refusee') DEFAULT 'en attente',
        id_user INT,
        id_mission INT NULL,
        FOREIGN KEY (id_user) REFERENCES user (id),
        FOREIGN KEY (id_mission) REFERENCES missions (id)
    );

/* J'ai du faire des modification de structure de ma db je voulais garder l'historique mais plus la mission
*/


-- ALTER TABLE candidature
-- MODIFY id_mission INT NULL;


-- ALTER TABLE candidature
-- DROP FOREIGN KEY candidature_ibfk_2;


-- ALTER TABLE candidature
-- ADD CONSTRAINT candidature_ibfk_2
-- FOREIGN KEY (id_mission) REFERENCES missions(id)
-- ON DELETE SET NULL;

