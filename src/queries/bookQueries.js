const bookQueries = {
  getAllBooks: 'SELECT * FROM book ORDER BY id ASC',
  
  getBookById: 'SELECT * FROM book WHERE id = $1',
  
  createBook: `
    INSERT INTO book (title, author, published_year, genre) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *
  `,
  
  updateBook: `
    UPDATE book 
    SET title = $1, 
        author = $2, 
        published_year = $3, 
        genre = $4 
    WHERE id = $5 
    RETURNING *
  `,
  
  deleteBook: 'DELETE FROM book WHERE id = $1 RETURNING *'
};

module.exports = bookQueries; 