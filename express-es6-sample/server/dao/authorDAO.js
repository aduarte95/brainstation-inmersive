import AuthorDTO from '../dto/authorDTO';

var authorList = [ new AuthorDTO(1, 'Aldoux', 1985, {
    id: '1',
    published_year: '2019-05-03',
    name: 'Book',
    genre: 'genere',
    author_id: '1'
}),
new AuthorDTO(2,'George', 1985, {
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

    function findById(id) {
        return authorList.find( dto => dto.id === Number(id));
    }
    return {
        getAuthors,
        saveAuthor,
        findById
    }
}