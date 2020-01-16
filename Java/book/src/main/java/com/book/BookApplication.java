package com.book;

import com.book.controller.BookController;
import com.book.model.Book;
import com.book.repository.BookRepository;
import com.book.service.BookService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.lang.reflect.Array;
import java.util.ListIterator;

@SpringBootApplication
public class BookApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookApplication.class, args);
        BookController bookController = new BookController();

        Book braveWorld = new Book("Huxley", "Brave World", "A", 1932);
        Book lordOfFlies = new Book("Lord Of Flies", "Golding", "AB", 1954);
        Book ninetyeightyfour = new Book("1984", "Orwell", "ABC", 1949);

        System.out.println("-- Book list --");
        bookController.printList();

        // Add books
        bookController.addBook(braveWorld);
        bookController.addBook(lordOfFlies);
        bookController.addBook(ninetyeightyfour);

        bookController.printList();
	}
}
