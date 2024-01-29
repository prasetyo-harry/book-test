const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  getBooksByType,
  updateBookByIdAndName,
  deleteBook,
} = require('../controllers/BookController');


router.post('/books', createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.get('/books/jenis/:type', getBooksByType);
router.put('/books/:id', updateBookByIdAndName);
router.delete('/books/:id', deleteBook);

module.exports = router;
