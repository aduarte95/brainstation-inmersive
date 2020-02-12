package com.book.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.Date;

public class Author {
    private int id;
    private ArrayList<Book> books;
    private String name;
    private String birthDate;
    private String fullName;
    private String deathDate;
    private String nationality;
    private String imgUrl;

    public Author() {

    }

    public Author(int id, String name, ArrayList<Book> books, String birthDate, String fullName, String deathDate, String nationality, String imgUrl) {
        this.id = id;
        this.name = name;
        this.books = books;
        this.birthDate = birthDate;
        this.fullName = fullName;
        this.deathDate = deathDate;
        this.nationality = nationality;
        this.imgUrl = imgUrl;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Book> getBooks() {
        return books;
    }

    public void setBooks(ArrayList<Book> books) {
        this.books = books;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getBirthDate() {
        return  birthDate;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getNationality() {
        return nationality;
    }

    public void setDeathDate(String deathDate) {
        this.deathDate = deathDate;
    }

    public String getDeathDate() {
        return deathDate;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getImgUrl() {
        return imgUrl;
    }
}
