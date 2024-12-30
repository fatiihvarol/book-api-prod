const express = require('express');
const cors = require('cors');
const pool = require('./config/database');
const bookRoutes = require('./routes/books');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Healthcheck endpoint
app.get('/health', async (req, res) => {
  try {
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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server başarıyla başlatıldı - Port: ${port}`);
}); 