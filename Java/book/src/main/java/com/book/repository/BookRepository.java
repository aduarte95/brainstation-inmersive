package com.book.repository;

import com.book.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.ListIterator;


public class BookRepository {
    ArrayList<Book> books = new ArrayList<Book>();

    // Create Read Delete Update

    public void addBook(Book book) {
        this.books.add(book);
    }

    public Book getBook(Long id) {
        ListIterator listIterator = books.listIterator();
        Book currentBook = new Book();
        boolean found = false;

        while(!found && listIterator.hasNext()) {
            currentBook = (Book)listIterator.next();
            if(currentBook.getId().equals(id)) {
                found = true;
            }
        }

        return currentBook;
    }
}
