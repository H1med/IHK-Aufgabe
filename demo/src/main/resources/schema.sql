CREATE SEQUENCE rating_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE rating (
                        id BIGINT NOT NULL,
                        rating INT,
                        PRIMARY KEY (id)
);
