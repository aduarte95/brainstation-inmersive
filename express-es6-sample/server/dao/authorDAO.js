import AuthorDTO from '../dto/authorDTO';
import Author from '../models/authorModel';

var authorList = [ new Author('Aldoux', 1985, {
    id: '1',
    published_year: '2019-05-03',
    name: 'Book',
    genre: 'genere',
    author_id: '2'
}),
new AuthorDTO('Aldoux', 1985, {
    id: '2',
    published_year: '2019-05-03',
    name: 'Book',
    genre: 'genere',
    author_id: '2'
})];

export default function authorDAO() {
    
    function getAuthors() {
        return authorList;
    }

    function saveAuthor(authorDTO) {
        authorList.push(authorDTO);
    }

    return {
        getAuthors,
        saveAuthor
    }
}