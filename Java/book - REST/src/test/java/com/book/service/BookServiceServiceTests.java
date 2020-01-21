package com.book.service;

import com.book.dto.AuthorDTO;
import com.book.model.Author;
import com.book.model.Book;
import com.book.repository.BookRepository;
import com.book.service.impl.BookServiceImpl;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BookServiceServiceTests {
    @Mock
    BookRepository bookRepository;

    @InjectMocks
    BookServiceImpl bookService;

    Book book;

    @BeforeEach
    public void init(){

        book = new Book();
        book.setId(1);
        book.setCode("1");
        book.setName("Brave World");
        book.setPublishedYear(1954);
    }

    @Test
    public void test_CreateBookSuccess() {
        Book createdBook = this.bookService.createBook(book);

        Assert.assertNotNull(createdBook);
    }


}
