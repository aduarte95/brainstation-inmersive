import authors from '../models/author';
import AuthorDTO from '../dto/authorDTO';
import author from '../models/author';


const getAll = (cb) => {
    authors.find({}, cb)
}

const createAuthor = author => {
    authors.create(author);
}

export default {
  getAll,
  createAuthor
};


    /*function saveAuthorToDAO(author) {
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

}*/

