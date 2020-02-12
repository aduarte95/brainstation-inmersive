package com.book.service.impl;

import com.book.dto.AuthorDTO;
import com.book.dto.BookDTO;
import com.book.model.Author;
import com.book.model.Book;
import com.book.repository.AuthorRepository;
import com.book.service.AuthorService;
import com.book.service.BookService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {
    AuthorRepository authorRepository;
    BookService bookService;

    public AuthorServiceImpl(AuthorRepository authorRepository, BookServiceImpl bookService) {
        this.authorRepository = authorRepository;
        this.bookService = bookService;
    }

    public Author getAuthor(int id) {
        AuthorDTO dto = this.authorRepository.getAuthor(id);
        List<Book> books = getBooks(dto.getBooks());
        String name = dto.getName();
        int dtoId = dto.getId();
        Date birthDate = dto.getBirthDate();
        Date deathDate = dto.getDeathDate();
        String nationality = dto.getNationality();
        String fullName = dto.getFullName();
        String imgUrl = dto.getImgUrl();

        return new Author(dtoId, name, books, birthDate, fullName, deathDate, nationality, imgUrl);
    }

    public Author createAuthor(Author author) {
        AuthorDTO dto = setDTO(author);

        if(!this.authorRepository.existsById(dto.getId())) {
            return setModel(this.authorRepository.save(dto));
        } else {
            return null;
        }

    }

    @Override
    public String deleteAuthor(int id) {
        long count = this.authorRepository.count();
        this.authorRepository.deleteById(id);

        if(count == (count - 1.)) {
            return "Author deleted successfully";
        } else {
            return "Couldn't delete author.";
        }
    }


    @Override
    public Author updateAuthor(int id, Author author) {
        AuthorDTO dto = setDTO(author);

        if(this.authorRepository.existsById(id)) {
            this.authorRepository.updateAuthor(id, dto);
            return author;
        } else {
            return null;
        }
    }

    @Override
    public List<Author> getAll() {
        List<AuthorDTO> authorDTOList = this.authorRepository.findAll();
        List<Author> authorList = new ArrayList<Author>();

        for(AuthorDTO e: authorDTOList){
            authorList.add(setModel(e));
        }

        return authorList;
    }

    @Override
    public Author addBook(int id, Book book) {
        return null;
    }

    private AuthorDTO setDTO(Author author) {
        AuthorDTO dto = new AuthorDTO();
        dto.setBooks(getBooksDTO(author.getBooks()));
        dto.setBirthDate(author.getBirthDate());
        dto.setName(author.getName());
        dto.setId(author.getId());
        dto.setNationality(author.getNationality());
        dto.setFullName(author.getFullName());
        dto.setDeathDate(author.getDeathDate());
        dto.setImgUrl(author.getImgUrl());

        return dto;
    }

    private Author setModel(AuthorDTO dto) {
        Author author = new Author();
        author.setBooks(getBooks(dto.getBooks()));
        author.setBirthDate(dto.getBirthDate());
        author.setName(dto.getName());
        author.setId(dto.getId());
        author.setNationality(dto.getNationality());
        author.setFullName(dto.getFullName());
        author.setDeathDate(dto.getDeathDate());
        author.setImgUrl(dto.getImgUrl());

        return author;
    }

    private List<Book> getBooks(List<BookDTO> bookDto) {
        List<Book> books = new ArrayList<>();

        for (BookDTO temp : bookDto) {
            books.add(bookService.setModel(temp));
        }

        return books;
    }

    private List<BookDTO> getBooksDTO(List<Book> books) {
        List<BookDTO> booksDTO = new ArrayList<>();

        for (Book temp : books) {
            booksDTO.add(bookService.setDTO(temp));
        }

        return booksDTO;
    }
}
