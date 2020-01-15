package com.book.service;

import com.book.model.Book;
import com.book.repository.BookRepository;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book getBook(Long id) {
        return bookRepository.getBook(id);
    }


}