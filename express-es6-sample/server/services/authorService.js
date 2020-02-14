import authorDAO from '../dao/authorDAO';
import Author from '../models/authorModel';
import AuthorDTO from '../dto/authorDTO';

const { getAuthors, saveAuthor, findById } = authorDAO();

export default function authorService() {

    function getAuthorsFromDAO() {
        var authors = getAuthors().map( dto => {
            return setModel(dto);
        });

        return authors;
    }

    function saveAuthorToDAO(author) {
        saveAuthor(setDTO(author));

        return 'Author saved successfully'
    }

    function findByIdFromDAO(id){
        const authorDTO = findById(id);
        
        return setModel(authorDTO);
    }

    function setModel(dto){
        return new Author(dto.id, dto.name, dto.birthdate, dto.books);
    }

    function setDTO(author) {
        return new AuthorDTO(author.id, author.name, author.birthdate, author.books);
    }

    return {
        getAuthorsFromDAO,
        saveAuthorToDAO,
        findByIdFromDAO
    }

}

