const pool = require('../config/database');
const queries = require('../queries/bookQueries');

const bookController = {
  // Tüm kitapları getir
  getAllBooks: async (req, res) => {
    try {
      const { rows } = await pool.query(queries.getAllBooks);
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // ID'ye göre kitap getir
  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const { rows } = await pool.query(queries.getBookById, [id]);
      
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Kitap bulunamadı' });
      }
      
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Yeni kitap ekle
  createBook: async (req, res) => {
    try {
      const { title, author, published_year, genre } = req.body;
      const { rows } = await pool.query(
        queries.createBook,
        [title, author, published_year, genre]
      );
      res.status(201).json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Kitap güncelle
  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, published_year, genre } = req.body;
      const { rows } = await pool.query(
        queries.updateBook,
        [title, author, published_year, genre, id]
      );
      
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Kitap bulunamadı' });
      }
      
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Kitap sil
  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { rows } = await pool.query(queries.deleteBook, [id]);
      
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Kitap bulunamadı' });
      }
      
      res.json({ message: 'Kitap başarıyla silindi' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = bookController; 