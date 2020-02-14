import express from 'express';
import authorService from '../services/authorService';
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const { getAuthorsFromDAO, saveAuthorToDAO } = authorService();

/* GET author listing. */
router.get('/', function(req, res) {
  res.status(200);
  res.send(getAuthorsFromDAO());
});

router.post('/', function(req, res) {
  res.send(saveAuthorToDAO(req.body));
});

router.get('/:id', function(req, res) {
  res.send('author by id');
});

router.post('/:id', function(req, res) {
  res.send('author');
});

router.get('/:id/books', function(req, res) {
  res.send('books');
});

export default router;
