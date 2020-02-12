package com.book.service;

import com.book.dto.AuthorDTO;
import com.book.exception.RepeatedNameException;
import com.book.model.Author;
import com.book.model.Book;
import com.book.repository.AuthorRepository;
import com.book.service.impl.AuthorServiceImpl;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.Assert;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;

import static java.time.LocalDateTime.now;

@SpringBootTest
public class AuthorServiceTests {
  /*  @Mock
    AuthorRepository authorRepository;

    @InjectMocks
    AuthorServiceImpl authorService;

    AuthorDTO authorDTO;
    Author author;
    Book book;

    @BeforeEach
    public void init(){
        authorDTO = new AuthorDTO();
        authorDTO.setBirthDate(new Date());
        authorDTO.setId(1);
        authorDTO.setName("Huxley");

        author = new Author();
        author.setBirthDate("1910");
        author.setId(1);
        author.setName("Huxley");

        book = new Book();
        book.setIsbn("1");
        book.setName("Brave World");
        book.setPublicationYear(1954);
    }

    @Test
    public void test_GetAuthorIsTheSameAsDTO() {
        Mockito
                .when(this.authorRepository.getAuthor(Mockito.anyInt()))
                .thenReturn(authorDTO);
        Author author = this.authorService.getAuthor(1);

        Assert.assertEquals(author.getName(), authorDTO.getName());
        Assert.assertEquals(author.getBooks(), authorDTO.getBooks());
        Assert.assertEquals(author.getBirthDate(), authorDTO.getBirthDate());
        Assert.assertEquals(author.getId(), authorDTO.getId());
    }

    @Test
    public void test_CreateAnExistentAuthor() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(true);
        Author createdAuthor = this.authorService.createAuthor(author);

        Assert.assertNull(createdAuthor);
    }

    @Test
    public void test_CreateNewAuthor() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(false);
        Author createdAuthor = this.authorService.createAuthor(author);

        Assert.assertNotNull(createdAuthor);
    }

    @Test
    public void test_DeleteAnExistentAuthor() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(true);
        String msg = this.authorService.deleteAuthor(1);

        Assert.assertNull(msg);
    }

    @Test
    public void test_DeleteNonexistentAuthor() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(false);
        String msg = this.authorService.deleteAuthor(1);

        Assert.assertEquals("Doesn't exist", msg);
    }

    @Test
    public void test_UpdateAnExistentAuthor() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(true);
        Author updatedAuthor = this.authorService.updateAuthor(1, author);

        Assert.assertNotNull(updatedAuthor);
    }

    @Test
    public void test_UpdateNonexistentAuthor() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(false);
        Author updatedAuthor = this.authorService.updateAuthor(1, author);

        Assert.assertNull(updatedAuthor);
    }

    @Test
    public void test_AuthorListIsEmpty() {
        ArrayList<AuthorDTO> list = new ArrayList<AuthorDTO>();

        Mockito
                .when(this.authorRepository.getAll())
                .thenReturn(list);
        ArrayList<Author> dtoArrayList = (ArrayList<Author>) this.authorService.getAll();

        boolean sameSize = list.size() == 0 && dtoArrayList.size() == 0;

        Assert.assertTrue(sameSize);
    }

    @Test
    public void test_AuthorListIsNotEmpty() {
        ArrayList<AuthorDTO> list = new ArrayList<AuthorDTO>();
        list.add(authorDTO);

        Mockito
                .when(this.authorRepository.getAll())
                .thenReturn(list);
        ArrayList<Author> dtoArrayList = (ArrayList<Author>) this.authorService.getAll();

        boolean sameSize = list.size() == 0 && dtoArrayList.size() == 0;

        Assert.assertFalse(sameSize);
        Assert.assertEquals(list.get(0).getName(), dtoArrayList.get(0).getName());
        Assert.assertEquals(list.get(0).getId(), dtoArrayList.get(0).getId());
        Assert.assertEquals(list.get(0).getBooks(), dtoArrayList.get(0).getBooks());
        Assert.assertEquals(list.get(0).getBirthDate(), dtoArrayList.get(0).getBirthDate());
    }

    @Test
    public void test_AddBookInAnExistentAuthorFails() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(true);
        Mockito
                .when(this.authorRepository.existBook(Mockito.anyInt(), Mockito.any(Book.class)))
                .thenReturn(true);

        try {
            Mockito
                    .when(this.authorRepository.addBook(Mockito.anyInt(), Mockito.any(Book.class)))
                    .thenReturn(new AuthorDTO());
            this.authorService.addBook(1, book);
            Assert.fail();
        } catch (RepeatedNameException e) {

        }
    }

    @Test
    public void test_AddBookInAnNonexistentAuthorFails() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(false);
        Author author = this.authorService.addBook(1, book);

        Assert.assertNull(author);
    }

    @Test
    public void test_AddBookInAnExistentAuthorSuccess() {
        Mockito
                .when(this.authorRepository.exist(Mockito.anyInt()))
                .thenReturn(true);
        Mockito
                .when(this.authorRepository.existBook(Mockito.anyInt(), Mockito.any(Book.class)))
                .thenReturn(false);

        try {
            Book dto = new Book();
            dto.setIsbn("1");
            dto.setName("Brave World");
            dto.setPublicationYear(1954);
            ArrayList<Book> books = new ArrayList<Book>();
            books.add(dto);
            authorDTO.setBooks(books);

            Mockito
                    .when(this.authorRepository.addBook(Mockito.anyInt(), Mockito.any(Book.class)))
                    .thenReturn(authorDTO);
            Author author = this.authorService.addBook(1, book);
            Assert.assertEquals(author.getBooks().get(0).getName(), book.getName());
        } catch (RepeatedNameException e) {
            Assert.fail();
        }
    }*/
}
