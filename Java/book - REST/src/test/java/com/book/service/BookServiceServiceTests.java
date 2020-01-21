package com.book.service;

import com.book.model.Book;
import com.book.repository.BookRepository;
import com.book.service.impl.BookServiceImpl;
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

    @Test
    public void test_ValidateEmptyBook(){
        Book book = new Book();
        book.setCode("1");
        book.setName("Brave World");
        book.setPublishedYear(1954);
        this.bookService.createBook(book);

    }
}
