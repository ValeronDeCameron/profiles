create TABLE users(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);