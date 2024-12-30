const express = require('express');
const cors = require('cors');
const pool = require('./config/database');
const bookRoutes = require('./routes/books');
const findAvailablePort = require('./utils/portFinder');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Healthcheck endpoint
app.get('/health', async (req, res) => {
  try {
    // Veritabanı bağlantısını kontrol et
    await pool.query('SELECT 1');
    
    res.json({
      status: 'healthy',
      timestamp: new Date(),
      database: 'connected',
      service: 'running'
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      timestamp: new Date(),
      database: 'disconnected',
      service: 'running',
      error: error.message
    });
  }
});

app.use('/api', bookRoutes);

const startServer = async () => {
  try {
    const preferredPort = process.env.PORT || 3000;
    const port = await findAvailablePort(preferredPort);
    
    app.listen(port, () => {
      console.log(`Server başarıyla başlatıldı - http://localhost:${port}`);
      if (port !== preferredPort) {
        console.log(`Not: ${preferredPort} portu kullanımda olduğu için ${port} portu kullanıldı`);
      }
    });
  } catch (error) {
    console.error('Server başlatılırken hata oluştu:', error);
    process.exit(1);
  }
};

startServer(); 