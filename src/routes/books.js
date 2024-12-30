const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Tüm kitapları getir
router.get('/books', bookController.getAllBooks);

// ID'ye göre kitap getir
router.get('/books/:id', bookController.getBookById);

// Yeni kitap ekle
router.post('/books', bookController.createBook);

// Kitap güncelle
router.put('/books/:id', bookController.updateBook);

// Kitap sil
router.delete('/books/:id', bookController.deleteBook);

module.exports = router; 