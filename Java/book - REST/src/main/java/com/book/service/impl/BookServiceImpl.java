package com.book.service.impl;

import com.book.model.Book;
import com.book.repository.BookRepository;
import com.book.service.BookService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.ListIterator;

@Service
public class BookServiceImpl implements BookService {
    private BookRepository bookRepository;
    private ArrayList<Book> books;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        this.books = getAll();
    }

    public void createBook(Book book) {
        boolean canCreate = true;

        if (this.books != null) {
            canCreate = validateCanCreate(book);
        }

        if (canCreate) {
            this.bookRepository.addBook(book);
        }

        this.books = getAll();
    }

    public boolean validateCanCreate(Book book) {
        boolean canCreate = true;
        boolean existSameCode = searchCode(book.getCode());
        boolean hasEmptyFields = validateBook(book);
        boolean haveSameNameAuthor = searchRecurrences(book);

        if (hasEmptyFields || !haveSameNameAuthor || existSameCode) {
            canCreate = false;
        }

        return canCreate;
    }

    public boolean searchCode(String code) {
        ListIterator<Book> listIterator = books.listIterator();
        Book currentBook = new Book();
        boolean haveSameCode = false;

        while (!haveSameCode && listIterator.hasNext()) {
            currentBook = listIterator.next();

            if (currentBook.getCode().equals(code)) {
                haveSameCode = true;
            }
        }

        return haveSameCode;
    }

    public boolean validateBook(Book book) {
        boolean hasEmptyFields = false;

        if (book.getName() == null || book.getAuthor() == null) {
            hasEmptyFields = true;
        }

        return hasEmptyFields;
    }

    public boolean searchRecurrences(Book book) {
        ListIterator<Book> listIterator = books.listIterator();
        Book currentBook;
        boolean haveSameNameAuthor = false;

        while (!haveSameNameAuthor && listIterator.hasNext()) {
            currentBook = listIterator.next();

            if (currentBook.equals(book)) {
                haveSameNameAuthor = true;
            }
        }

        return haveSameNameAuthor;
    }

    public Book getBook(int id) {
        return this.bookRepository.getBook(id);
    }

    public void deleteBook(int id) {
        this.bookRepository.deleteBook(id);
        this.books = getAll();
    }

    public void updateBookAuthor(int id, String author) {
        this.bookRepository.editBookAuthor(id, author);
        this.books = getAll();
    }

    public ArrayList<Book> getAll() {
        return this.books;
    }

    public void printList() {
        if (this.books != null) {
            ListIterator<Book> listIterator = this.books.listIterator();
            Book currentBook;

            while (listIterator.hasNext()) {
                currentBook = listIterator.next();
                System.out.println("Book name:" + currentBook.getName() + "author: " + currentBook.getAuthor());
            }
        }
    }
}

