const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = isProduction
  ? process.env.DATABASE_URL // Render'ın sağladığı URL
  : `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/book_db`;

const pool = new Pool({
  connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

// Bağlantıyı test et
pool.on('error', (err) => {
  console.error('Beklenmeyen veritabanı hatası', err);
});

module.exports = pool; 