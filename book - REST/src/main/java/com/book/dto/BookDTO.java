package com.book.dto;
import javax.persistence.*;

@Entity
@Table(name = "book")
public class BookDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String isbn;

    @Column(name = "published_year")
    private int publicationYear;


    private String genres;
    private String topic;

    @Column(name = "img_url")
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

    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }

    public int getPublicationYear() {
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
        BookDTO book = (BookDTO)obj;
        boolean haveSameNameAuthor = false;

        if(this.name.equals(book.name)) {
            haveSameNameAuthor = true;
        }

        return haveSameNameAuthor;
    }

}

