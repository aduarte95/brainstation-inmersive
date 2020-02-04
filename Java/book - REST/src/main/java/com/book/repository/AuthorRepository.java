package com.book.repository;

import com.book.dto.AuthorDTO;
import com.book.model.Book;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.ListIterator;

@Repository
public class AuthorRepository {
    private ArrayList<AuthorDTO> dtos;
    private int id;

    public AuthorRepository() {
        this.id = 0;
        this.dtos = new ArrayList<>();
        ArrayList<Book> books = new ArrayList<Book>();
        books.add(new Book(id++, "Brave New World", "cd123", 1932, "Novel", "Dystopian", "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Island.JPG/220px-Island.JPG"));
        books.add(new Book(id++, "Island", "cd1232", 1962, "Novel", "Dystopian", "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg"));
        books.add(new Book(id++, "The Gioconda Smile", "cd1233", 1921, "Novel", "Mistery", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1318151976l/796106.jpg"));
        this.dtos.add(new AuthorDTO(1, "Aldous Huxley", books, "1894", "Aldous Leonard Huxley", "1963", "British", "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/07/aldous-huxley.jpg"));

        books = new ArrayList<>();
        books.add(new Book(id++, "1984", "cd1234", 1949, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/81WunXo0giL.jpg"));
        books.add(new Book(id++, "Animal Farm", "cd1235", 1984, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/510%2Bj0PdQjL.jpg"));

        this.dtos.add(new AuthorDTO(2, "George Orwell", books, "1980", "Eric Arthur Blair", "1990", "Indian", "https://upload.wikimedia.org/wikipedia/commons/c/cc/George_Orwell%2C_c._1940.jpg"));

        books = new ArrayList<>();
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        books.add(new Book(id++, "100 años de soledad", "cd1236", 1982, "Novel", "Dystopian", "https://images-na.ssl-images-amazon.com/images/I/A1ULI3MovqL.jpg"));
        this.dtos.add(new AuthorDTO(3, "Gabriel García Marquez", books, "1980", "Gabriel José de la Concordia García Márquez", "1990", "Colombian", "https://www.biografiasyvidas.com/biografia/g/fotos/garcia_marquez_gabriel.jpg"));

        books = new ArrayList<>();
        this.dtos.add(new AuthorDTO(4, "William Golding", books, "1980", "William Gerald Golding", "1990", "British", "https://upload.wikimedia.org/wikipedia/commons/f/f9/William_Golding_1983.jpg"));
        this.dtos.add(new AuthorDTO(5, "Louisa May Alcott", books, "1980", "Louisa May Alcott", "1990", "American", "https://upload.wikimedia.org/wikipedia/commons/4/4f/Louisa_May_Alcott_headshot.jpg"));

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

    public AuthorDTO addBook(int id, Book book) {
        ListIterator<AuthorDTO> listIterator = dtos.listIterator();
        AuthorDTO currentAuthorDTO = null;
        boolean found = false;

        while (!found && listIterator.hasNext()) {
            currentAuthorDTO = listIterator.next();

            if (currentAuthorDTO.getId() == id) {
                book.setId(this.id++);
                currentAuthorDTO.addBook(book);
              //  listIterator.set(currentAuthorDTO);
                found = true;
            }
        }

        return currentAuthorDTO;
    }

    public ArrayList<AuthorDTO> getAll() {
        return this.dtos;
    }

    public boolean existBook(int id, Book book) {
        AuthorDTO dto = getAuthor(id);

        if(dto.getBooks() != null) {
            return dto.getBooks().stream().anyMatch(
                    bookDTO ->
                            bookDTO.getName().equals(book.getName())
            );
        } else {
            return false;
        }
    }
}
