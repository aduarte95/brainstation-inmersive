import express from 'express';
import authorService from '../services/authorService';
var router = express.Router();

/* GET author listing. */
router.get("/", function(req, res) {
  authorService.getAll(function(err, result) {
    res.json(result.map(element => {
      return authorService.setModel(element);
  }));
  });
});

router.post("/", function(req, res, next) {
  authorService.createAuthor(req.body);
  res.send({
    status: 200,
    message: "success"
  });
});

/*
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
});*/

export default router;
