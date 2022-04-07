DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR,
    pen_name VARCHAR,
    post_body VARCHAR
);
