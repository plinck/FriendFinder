DROP DATABASE IF EXISTS friend_finder_db;
CREATE DATABASE friend_finder_db;
USE friend_finder_db;

DROP TABLE IF EXISTS friends;

-- Store the answers as JSON string in database
CREATE TABLE friends (
    id        INT AUTO_INCREMENT NOT NULL,
    name      VARCHAR(30) NOT NULL,
    photo_url TEXT NOT NULL,
    answers   CHAR(21) NOT NULL,
    PRIMARY KEY (id)
);
