CREATE TABLE users (
    us_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    us_name VARCHAR(255) NOT NULL,
    us_lastname VARCHAR(255) NOT NULL,
    us_email VARCHAR(255) UNIQUE NOT NULL,
    us_password VARCHAR(255) NOT NULL
);
CREATE TABLE products (
    prod_id BIGINT PRIMARY KEY,
    prod_nombre VARCHAR(255) NOT NULL,
    prod_precio INTEGER NOT NULL,
    prod_cantidad INTEGER NOT NULL
);