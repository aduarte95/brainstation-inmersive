import authorDAO from '../dao/authorDAO';
import Author from '../models/authorModel';

const { getAuthors } = authorDAO();

export default function authorService() {

    function getAuthorsFromDAO() {
        var authors = getAuthors().map( dto => {
            return new Author(dto.name, dto.birthdate, dto.books);
        });

        console.log(authors);
        return authors;
    }

    return {
        getAuthorsFromDAO
    }

}

