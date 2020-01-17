package com.book.repository;

import com.book.dto.AuthorDTO;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.ListIterator;

@Repository
public class AuthorRepository {
    private ArrayList<AuthorDTO> dtos;

    public AuthorRepository() {
        this.dtos = new ArrayList<>();
    }

    public AuthorDTO getAuthor(int id) {
        AuthorDTO dto = getAuthorDTO(id);

        return dto;
    }

    public void createAuthor(AuthorDTO dto) {
        this.dtos.add(dto);
    }

    public AuthorDTO getAuthorDTO(int id) {
        ListIterator<AuthorDTO> listIterator = dtos.listIterator();
        AuthorDTO currentAuthorDTO = null;
        boolean found = false;

        while (!found && listIterator.hasNext()) {
            currentAuthorDTO = listIterator.next();

            if (currentAuthorDTO.getId() == id) {
                found = true;
            }
        }

        return currentAuthorDTO;
    }

    public boolean exist(int id) { return dtos.stream().anyMatch(dto -> dto.getId() == id); }

    public void updateAuthor(int id, AuthorDTO dto) {
        ListIterator<AuthorDTO> listIterator = dtos.listIterator();
        AuthorDTO currentAuthorDTO ;
        boolean found = false;

        while (!found && listIterator.hasNext()) {
            currentAuthorDTO = listIterator.next();

            if (currentAuthorDTO.getId() == id) {
                listIterator.set(dto);
                found = true;
            }
        }
    }

    public void deleteAuthor(int id) {
        ListIterator<AuthorDTO> listIterator = dtos.listIterator();
        AuthorDTO currentAuthorDTO ;
        boolean found = false;

        while (!found && listIterator.hasNext()) {
            currentAuthorDTO = listIterator.next();

            if (currentAuthorDTO.getId() == id) {
                listIterator.remove();
                found = true;
            }
        }
    }

    public ArrayList<AuthorDTO> getAll() {
        return this.dtos;
    }
}
