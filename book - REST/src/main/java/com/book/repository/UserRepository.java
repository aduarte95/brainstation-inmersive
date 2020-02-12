package com.book.repository;

import com.book.dto.AuthorDTO;
import com.book.dto.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<UserDTO, Long> {

    List<UserDTO> findByUsername(String username);

    UserDTO findByEmail(String email);


}