package com.book.dto;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "book")
public class BookDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, columnDefinition = "char")
    private String name;

    @Column(nullable = false, unique = true, columnDefinition = "char")
    private String isbn;

    @Column(name = "published_year")
    private LocalDateTime publicationYear;

    @Column(columnDefinition = "char")
    private String genre;

    @Column(columnDefinition = "char")
    private String topic;

    @Column(name = "img_url", columnDefinition = "char")
    private String imgUrl;

    @ManyToOne
    @JoinColumn(name="author_id")
    private AuthorDTO author;

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
        this.genre = genres;
    }


    public String getGenres() {
        return genre;
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
        BookDTO book = (BookDTO)obj;
        boolean haveSameNameAuthor = false;

        if(this.name.equals(book.name)) {
            haveSameNameAuthor = true;
        }

        return haveSameNameAuthor;
    }

}

