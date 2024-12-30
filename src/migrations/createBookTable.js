const pool = require('../config/database');

const createBookTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS book (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        published_year INTEGER,
        genre VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await pool.query(createTableQuery);
    console.log('Book tablosu başarıyla oluşturuldu');
  } catch (error) {
    console.error('Tablo oluşturulurken hata:', error);
    throw error;
  }
};

// Migration'ı çalıştır
createBookTable(); 