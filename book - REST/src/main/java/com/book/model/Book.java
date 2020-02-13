package com.book.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

public class Book {
    private int id;

    private String name;
    private String isbn;
    private LocalDateTime publicationYear;
    private String genres;
    private String topic;
    private String imgUrl;

    public Book(){}

    public Book(int id, String name, String isbn, LocalDateTime publicationYear, String genres, String topic, String imgUrl) {
        this.id = id;
        this.name = name;
        this.isbn = isbn;
        this.publicationYear = publicationYear;
        this.genres = genres;
        this.topic = topic;
        this.imgUrl = imgUrl;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setPublicationYear(LocalDateTime publicationYear) {
        this.publicationYear = publicationYear;
    }

    public LocalDateTime getPublicationYear() {
        return publicationYear;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getGenres() {
        return genres;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getTopic() {
        return topic;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    @Override
    public boolean equals(Object obj) {
        Book book = (Book)obj;
        boolean haveSameNameAuthor = false;

        if(this.name.equals(book.name)) {
            haveSameNameAuthor = true;
        }

        return haveSameNameAuthor;
    }

}

