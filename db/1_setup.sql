DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR,
    penName VARCHAR,
    postBody VARCHAR
);
