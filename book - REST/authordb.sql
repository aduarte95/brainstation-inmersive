CREATE  TABLE book (
                       id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                       name CHAR(100) NOT NULL,
                       published_year DATETIME,
                       isbn CHAR(30) NOT NULL UNIQUE,
                       genre CHAR(30),
                       topic CHAR(30),
                       img_url CHAR(255),
                       PRIMARY KEY (id)
);

CREATE TABLE author (
                        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                        name CHAR(30) NOT NULL,
                        full_name CHAR(50),
                        birth_date DATETIME,
                        death_date DATETIME,
                        nationality CHAR(30),
                        img_url CHAR(255),
                        book_id INT UNSIGNED NOT NULL,
                        CONSTRAINT `fk_book_author`
                            FOREIGN KEY (book_id) REFERENCES book (id)
                                ON DELETE CASCADE
                                ON UPDATE RESTRICT,

                        PRIMARY KEY (id)
);