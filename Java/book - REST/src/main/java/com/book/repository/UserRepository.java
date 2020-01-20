package com.book.repository;

import com.book.dto.UserDTO;

import java.util.ArrayList;

public class UserRepository {
    private ArrayList<UserDTO> dtos;

    public UserRepository() {
        this.dtos = new ArrayList<UserDTO>();
    }
    
    public UserDTO getUser(int id) {
        return null;
    }

    public boolean verifyPassword(UserDTO dto, String password) {
        return dto.getPassword().equals(getUser(dto.getId()));
    }
}
