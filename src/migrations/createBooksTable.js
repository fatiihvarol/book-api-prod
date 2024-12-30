const pool = require('../config/database');

const createBooksTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public.books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        published_year INTEGER,
        genre VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await pool.query(createTableQuery);
    console.log('Books tablosu başarıyla oluşturuldu');
  } catch (error) {
    console.error('Tablo oluşturulurken hata:', error);
    throw error;
  }
};

// Migration'ı çalıştır
createBooksTable(); 