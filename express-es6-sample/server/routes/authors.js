import express from 'express';
import authorService from '../services/authorService';
var router = express.Router();

const { getAuthorsFromDAO, saveAuthorToDAO, findByIdFromDAO } = authorService();

/* GET author listing. */
router.get('/', function(req, res) {
  res.status(200);
  res.send(getAuthorsFromDAO());
});

router.post('/', function(req, res) {
  res.send(saveAuthorToDAO(req.body));
});

router.get('/:id', function(req, res) {
  const { id } = req.params;

  res.send(findByIdFromDAO(id));
});

router.post('/:id', function(req, res) {
  res.send('author');
});

router.get('/:id/books', function(req, res) {
  res.send('books');
});

export default router;
