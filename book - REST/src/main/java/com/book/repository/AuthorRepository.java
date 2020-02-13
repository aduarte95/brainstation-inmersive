package com.book.repository;

import com.book.dto.AuthorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AuthorRepository extends JpaRepository<AuthorDTO, Integer> {

    List<AuthorDTO> findByName(String name);

    AuthorDTO findById(int id);
}