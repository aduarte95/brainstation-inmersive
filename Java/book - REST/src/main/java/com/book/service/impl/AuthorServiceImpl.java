package com.book.service.impl;

import com.book.dto.AuthorDTO;
import com.book.exception.RepeatedNameException;
import com.book.model.Author;
import com.book.model.Book;
import com.book.repository.AuthorRepository;
import com.book.service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {
    AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Author getAuthor(int id) {
        AuthorDTO dto = this.authorRepository.getAuthor(id);
        ArrayList<Book> books = dto.getBooks();
        String name = dto.getName();
        int dtoId = dto.getId();
        String birthDate = dto.getBirthDate();
        String deathDate = dto.getDeathDate();
        String nationality = dto.getNationality();
        String fullName = dto.getFullName();
        String imgUrl = dto.getImgUrl();

        return new Author(dtoId, name, books, birthDate, fullName, deathDate, nationality, imgUrl);
    }

    public Author createAuthor(Author author) {
        AuthorDTO dto = setDTO(author);

        if(!this.authorRepository.exist(dto.getId())) {
            this.authorRepository.createAuthor(dto);
            return author;
        } else {
            return null;
        }
    }

    @Override
    public String deleteAuthor(int id) {
        if(this.authorRepository.exist(id)) {
            this.authorRepository.deleteAuthor(id);
            return null;
        } else {
            return "Doesn't exist";
        }
    }

    @Override
    public Author updateAuthor(int id, Author author) {
        AuthorDTO dto = setDTO(author);

        if(this.authorRepository.exist(id)) {
            this.authorRepository.updateAuthor(id, dto);
            return author;
        } else {
            return null;
        }
    }

    @Override
    public List<Author> getAll() {
        List<AuthorDTO> authorDTOList = this.authorRepository.getAll();
        List<Author> authorList = new ArrayList<Author>();

        for(AuthorDTO e: authorDTOList){
            authorList.add(setModel(e));
        }

        return authorList;
    }

    @Override
    public Author addBook(int id, Book book) {
        if(this.authorRepository.exist(id)) {
            if(!this.authorRepository.existBook(id, book)) {
                AuthorDTO dto = this.authorRepository.addBook(id, book);

                return setModel(dto);
            } else {
                throw new RepeatedNameException("The book exists.");
            }
        } else {
            return null;
        }
    }

    private AuthorDTO setDTO(Author author) {
        AuthorDTO dto = new AuthorDTO();
        dto.setBooks(author.getBooks());
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
        author.setBooks(dto.getBooks());
        author.setBirthDate(dto.getBirthDate());
        author.setName(dto.getName());
        author.setId(dto.getId());
        author.setNationality(dto.getNationality());
        author.setFullName(dto.getFullName());
        author.setDeathDate(dto.getDeathDate());
        author.setImgUrl(dto.getImgUrl());

        return author;
    }
}
