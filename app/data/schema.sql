CREATE DATABASE IF NOT EXISTS msisdshw;
USE msisdshw;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48),
    authors varchar(48),
    publishyr int NOT NULL,
    publisher varchar(48),
    pagesum int NOT NULL,
    MSRP varchar(48) NOT NULL
);

INSERT INTO books (id, title, authors, publishyr, publisher, pagesum, MSRP) VALUES 
(1, 'Harry Potter and the Philosophers Stone', 'J. K. Rowling', 1997, 'Bloomsbury', 223, '8.99'),
(2, 'Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', 1999, 'Bloomsbury', 317, '116.69'),
(3, 'Harry Potter and the Goblet of Fire', 'J. K. Rowling', 2000, 'Bloomsbury', 636, '70.00'),
(4, 'Harry Potter and the Order of the Phoenix', 'J. K. Rowling', 2003, 'Bloomsbury', 766, '6.98'), 
(5, 'Harry Potter and the Half-Blood Prince', 'J. K. Rowling', 2005, 'Bloomsbury', 607, '29.99');


-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';

