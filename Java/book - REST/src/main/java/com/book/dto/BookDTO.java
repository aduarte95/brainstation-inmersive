package com.book.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BookDTO {
    // Id of the book
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String code;
    private int publishedYear;

    public BookDTO(){}

    public BookDTO(Long id, String name, String code, int publishedYear) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.publishedYear = publishedYear;
    }

    public Long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setPublishedYear(int publishedYear) {
        this.publishedYear = publishedYear;
    }

    public int getPublishedYear() {
        return publishedYear;
    }

    @Override
    public boolean equals(Object obj) {
        BookDTO book = (BookDTO)obj;
        boolean haveSameNameAuthor = false;

        if(this.name.equals(book.name)) {
            haveSameNameAuthor = true;
        }

        return haveSameNameAuthor;
    }

}

