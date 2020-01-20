package com.book.controller;

import com.book.model.Author;
import com.book.model.Book;
import com.book.model.User;
import com.book.service.AuthorService;
import com.book.service.UserService;
import com.book.utils.TokenUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@RestController
public class AuthorController {
    private AuthorService authorService;
    private UserService userService;

    public AuthorController(AuthorService authorService, UserService userService) {
        this.authorService = authorService;
        this.userService = userService;
    }

    @GetMapping(value = "/author")
    public ArrayList<Author> getAuthor() {
        return (ArrayList<Author>) this.authorService.getAll();
    }

    @PostMapping(value = "/login")
    public ResponseEntity getToken(@RequestBody User user) {
        if (this.userService.verifyPassword(user.getPassword())) {
            return new ResponseEntity(TokenUtils.createToken(user.getUsername()), HttpStatus.OK); ;
        } else {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/verifyToken")
    public ResponseEntity verifyToken(@RequestHeader String token, @RequestHeader String username) {
        if(TokenUtils.verifyToken(token, username)){
            return new ResponseEntity("Token accepted", HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @GetMapping(value = "/author/{authorId}")
    public Author getAuthor(@PathVariable String authorId, @RequestBody User user) {
            return this.authorService.getAuthor(Integer.parseInt(authorId));
    }

    @PostMapping(value="/author")
    public ResponseEntity createAuthor(@RequestBody Author author){
        Author authorEntity = this.authorService.createAuthor(author);

        return verifyResponse(authorEntity);
    }

    @PutMapping(value = "/author/{authorId}")
    public ResponseEntity updateAuthor(@PathVariable String authorId, @RequestBody Author author) {
        Author authorEntity = this.authorService.updateAuthor(Integer.parseInt(authorId), author);

        return verifyResponse(authorEntity);
    }

    @DeleteMapping(value = "author/{authorId}")
    public ResponseEntity deleteAuthor(@PathVariable String authorId) {
        String authorEntity = this.authorService.deleteAuthor(Integer.parseInt(authorId));

        if(authorEntity == null){
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value="/author/{authorId}")
    public ResponseEntity addBook(@PathVariable String authorId, @RequestBody Book book) {
        Author authorEntity = this.authorService.addBook(Integer.parseInt(authorId), book);

        return verifyResponse(authorEntity);
    }

    private ResponseEntity verifyResponse(Author authorEntity) {
        if(authorEntity != null){
            return new ResponseEntity<>(authorEntity, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
