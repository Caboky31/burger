--  * Create the `burgers_db`.
CREATE DATABASE burgers_db;
--    * Switch to or use the `burgers_db`.
USE burgers_db;
--    * Create a `burgers` table with these fields:
CREATE TABLE burgers
(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
)
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.