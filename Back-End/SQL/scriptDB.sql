CREATE TABLE users (
    us_id integer AUTO_INCREMENT PRIMARY KEY,
    us_name VARCHAR(255) NOT NULL,
    us_lastname VARCHAR(255) NOT NULL,
    us_email VARCHAR(255) UNIQUE NOT NULL,
    us_password VARCHAR(255) NOT NULL
);