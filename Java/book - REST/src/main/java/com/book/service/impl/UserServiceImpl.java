package com.book.service.impl;

import com.book.dto.UserDTO;
import com.book.model.User;
import com.book.repository.UserRepository;
import com.book.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public boolean verifyPassword(User user) {
        UserDTO userDTO = setDTO(user);

        return this.userRepository.verifyPassword(userDTO);
    }

    private UserDTO setDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setPassword(user.getPassword());
        userDTO.setUsername(user.getUsername());

        return userDTO;
    }
}
