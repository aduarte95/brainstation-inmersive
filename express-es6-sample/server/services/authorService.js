import authors from '../models/author';
import Author from '../dataModels/authorModel';


const getAll = (cb) => {
    authors.find({}, cb);
}

const createAuthor = author => {
    authors.create(author);
}

const addBook = (book, id) => {
    authors.findOneAndUpdate(
        { _id: id }, 
        { $push: { books: book } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
}

const setModel = dto => {
    return new Author(dto.id, dto.name, dto.full_name, dto.birth_date, dto.death_date, dto.nationality, dto.img_url, dto.books);
}

export default {
  getAll,
  createAuthor, 
  setModel,
  addBook
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

