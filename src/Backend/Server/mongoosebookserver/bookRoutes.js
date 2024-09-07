const express = require('express');
const router = express.Router();
const bookController = require('./bookController');

// Define routes
router.post('/books', bookController.createBook);
router.get('/books', bookController.getAllBooks);
// Other routes...

module.exports = router;
