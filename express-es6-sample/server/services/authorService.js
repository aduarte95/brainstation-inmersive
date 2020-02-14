import authorDAO from '../dao/authorDAO';
import Author from '../models/authorModel';
import AuthorDTO from '../dto/authorDTO';

const { getAuthors, saveAuthor } = authorDAO();

export default function authorService() {

    function getAuthorsFromDAO() {
        var authors = getAuthors().map( dto => {
            return new Author(dto.name, dto.birthdate, dto.books);
        });

        return authors;
    }

    function saveAuthorToDAO(author) {
        const authorDTO = new AuthorDTO(author.name, author.birthdate, author.books);
        saveAuthor(authorDTO);

        return 'Author saved successfully'
    }

    return {
        getAuthorsFromDAO,
        saveAuthorToDAO
    }

}

