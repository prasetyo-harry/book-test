const bookstoreData = require('../models/data');

// Create a book
const createBook = (req, res) => {
    const newBook = req.body;
    const lastBookId = bookstoreData.length > 0 ? bookstoreData[bookstoreData.length - 1].id : 0;
    newBook.id = lastBookId + 1;
    bookstoreData.push(newBook);
  
    const responseData = {
      message: 'Success',
      data: bookstoreData.map((book) => ({
        id: book.id,
        name: book.name,
        type: book.type,
      })),
    };
  
    res.json(responseData);
  };
  
// Read all books
const getAllBooks = (req, res) => {
    const responseData = {
      message: 'Success',
      data: bookstoreData.map((book) => ({
        id: book.id,
        name: book.name,
        type: book.type,
      })),
    };
    res.json(responseData);
  };

// Read a single book
const getBookById = (req, res) => {
    const bookId = req.params.id;
    const book = bookstoreData.find((b) => b.id === parseInt(bookId));
  
    if (book) {
      const responseData = {
        message: 'Success',
        data: {
          id: book.id,
          name: book.name,
          type: book.type,
        },
      };
      res.json(responseData);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  };

// Find book by type
const getBooksByType = (req, res) => {
    const bookType = req.params.type.toLowerCase();
    const booksOfType = bookstoreData
      .filter((b) => b.type && b.type.toLowerCase() === bookType)
      .map((book) => ({
        id: book.id,
        name: book.name,
        type: book.type,
      }));
  
    if (booksOfType.length > 0) {
      const responseData = {
        message: 'Success',
        data: booksOfType,
      };
      res.json(responseData);
    } else {
      res.status(404).json({ message: 'Books of the specified type not found' });
    }
  };

// Update a book
const updateBookByIdAndName = (req, res) => {
  const bookId = req.params.id;
  const updatedName = req.body.name;
  const updatedBook = req.body;

  const index = bookstoreData.findIndex((b) => b.id === parseInt(bookId));

  if (index !== -1) {
    bookstoreData[index] = { ...bookstoreData[index], ...updatedBook };
    const responseData = {
      message: 'Success',
      data: bookstoreData.map((book) => ({
        id: book.id,
        name: book.name,
        type: book.type,
      })),
    };
    res.json(responseData);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Delete a book
const deleteBook = (req, res) => {
    const bookId = req.params.id;
    const index = bookstoreData.findIndex((b) => b.id === parseInt(bookId));
  
    if (index !== -1) {
      bookstoreData.splice(index, 1);
  
      const responseData = {
        message: 'Success',
        data: bookstoreData.map((book) => ({
          id: book.id,
          name: book.name,
          type: book.type,
        })),
      };
  
      res.json(responseData);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  };

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  getBooksByType,
  updateBookByIdAndName,
  deleteBook,
};
