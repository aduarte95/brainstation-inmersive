package com.book.repository;

import com.book.dto.AuthorDTO;
import com.book.dto.BookDTO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<BookDTO, Integer> {

    List<BookDTO> findByName(String name);

    List<BookDTO> findBookDTOSByAuthorId(int i);

    BookDTO findById(int id);
}