package com.book.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
    // Id of the book
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String author;
    private String name;
    private String code;
    private int yearPublished;

    public Book(){}

    public Book(String name, String author, String code, int yearPublished) {
        this.id = getId();
        this.author = author;
        this.name = name;
        this.code = code;
        this.yearPublished = yearPublished;
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

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAuthor() {
        return author;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setYearPublished(int yearPublished) {
        this.yearPublished = yearPublished;
    }

    public int getYearPublished() {
        return yearPublished;
    }

    @Override
    public boolean equals(Object obj) {
        Book book = (Book)obj;
        boolean haveSameNameAuthor = false;

        if(this.name.equals(book.name) && this.author.equals(book.author)) {
            haveSameNameAuthor = true;
        }

        return haveSameNameAuthor;
    }

}

