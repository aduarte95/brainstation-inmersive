import authors from '../models/author';
import Author from '../dataModels/authorModel';


const getAll = (cb) => {
    authors.find({}, cb);
}

const createAuthor = author => {
    authors.create(author);
}

const setModel = dto => {
    return new Author(dto.id, dto.name, dto.fullName, dto.birthdate, dto.img_url, dto.books);
}

export default {
  getAll,
  createAuthor, 
  setModel
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

