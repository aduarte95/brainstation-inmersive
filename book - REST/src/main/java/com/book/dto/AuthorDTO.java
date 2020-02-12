package com.book.dto;

import com.book.model.Book;

import javax.persistence.*;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "author")
public class AuthorDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false, columnDefinition = "char")
    private String name;

    @OneToMany(mappedBy = "author")
    private List<BookDTO> books;

    @Column(name = "birth_date")
    private Date birthDate;

    @Column(name = "full_name", columnDefinition = "char")
    private String fullName;

    @Column(name = "death_date")
    private Date deathDate;

    @Column(columnDefinition = "char")
    private String nationality;

    @Column(name = "img_url", columnDefinition = "char")
    private String imgUrl;


    public AuthorDTO(){
    }

    public AuthorDTO(int id, String name, List<BookDTO> books, Date birthDate, String fullName, Date deathDate, String nationality, String imgUrl) {
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

    public List<BookDTO> getBooks() {
        return books;
    }

    public void setBooks(List<BookDTO> books) {
        this.books = books;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public Date getBirthDate() {
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

    public void setDeathDate(Date deathDate) {
        this.deathDate = deathDate;
    }

    public Date getDeathDate() {
        return deathDate;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void addBook(BookDTO book) {
        if(this.books == null) {
            this.books = new ArrayList<>();
        }
        this.books.add(book);
    }
}
