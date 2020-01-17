package com.book.repository;

import com.book.model.Book;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.ListIterator;

@Repository
public class BookRepository {
    ArrayList<Book> books = new ArrayList<Book>();

    // Create Read Delete Update

    public void addBook(Book book) {
        this.books.add(book);
    }

    public Book getBook(int id) {
        ListIterator<Book> listIterator = books.listIterator();
        Book currentBook = new Book();
        boolean found = false;

        for(Book current: books) {

        }

        while (!found && listIterator.hasNext()) {
            currentBook = listIterator.next();

            if (currentBook.getId().equals(id)) {
                found = true;
            }
        }

        return currentBook;
    }

    public void deleteBook(int id) {
        ListIterator listIterator = books.listIterator();
        Book currentBook;
        boolean found = false;

        while (!found && listIterator.hasNext()) {
            currentBook = (Book) listIterator.next();

            if (currentBook.getId().equals(id)) {
                found = true;
                listIterator.remove();
            }
        }
    }

   /* public void editBookAuthor(int id, String author) {
        Book currentBook = getBook(id);
        currentBook.setAuthor(author);
    }
*/
    public ArrayList<Book> getAll() {
        return this.books;
    }
}
