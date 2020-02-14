import express from 'express'
var router = express.Router();

Books = [
    {
        id: '1',
        published_year: '2019-05-03',
        name: 'Book',
        genre: 'genere',
        author_id: '2'
    },
    {
        id: '2',
        published_year: '2019-05-03',
        name: 'Book',
        genre: 'genere',
        author_id: '2'
    },
    {
        id: '3',
        published_year: '2019-05-03',
        name: 'Book',
        genre: 'genere',
        author_id: '2'
    },
    {
        id: '4',
        published_year: '2019-05-03',
        name: 'Book',
        genre: 'genere',
        author_id: '2'
    },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
