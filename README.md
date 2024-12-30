# Book API

PostgreSQL veritabanı kullanan basit bir kitap yönetim API'si.

## 🌐 Live Demo
Base URL: `https://book-api-prod.onrender.com`

## 📚 API Endpoints

### Tüm Kitapları Getir
```http
https://book-api-prod.onrender.com/api/books
```

**Örnek Response:**
```json
[
  {
    "id": 1,
    "title": "Dune",
    "author": "Frank Herbert",
    "published_year": 1965,
    "genre": "Bilim Kurgu",
    "created_at": "2024-12-30T18:45:48.129Z"
  },
  {
    "id": 2,
    "title": "Otomatik Portakal",
    "author": "Anthony Burgess",
    "published_year": 1962,
    "genre": "Distopya",
    "created_at": "2024-12-30T18:45:57.711Z"
  }
]
```

### Tek Kitap Getir
```http
https://book-api-prod.onrender.com/api/books/1
```

**Örnek Response:**
```json
{
  "id": 1,
  "title": "Dune",
  "author": "Frank Herbert",
  "published_year": 1965,
  "genre": "Bilim Kurgu",
  "created_at": "2024-12-30T18:45:48.129Z"
}
```

### Yeni Kitap Ekle
```http
POST /api/books
```

**Request Body:**
```json
{
  "title": "İnce Memed",
  "author": "Yaşar Kemal",
  "published_year": 1955,
  "genre": "Roman"
}
```

**Response:**
```json
{
  "id": 3,
  "title": "İnce Memed",
  "author": "Yaşar Kemal",
  "published_year": 1955,
  "genre": "Roman",
  "created_at": "2024-12-30T18:46:02.673Z"
}
```

### Kitap Güncelle
```http
https://book-api-prod.onrender.com/api/books/:id
```

**Request Body:**
```json
{
  "title": "Dune: Çöl Gezegeni",
  "author": "Frank Herbert",
  "published_year": 1965,
  "genre": "Bilim Kurgu"
}
```

**Response:**
```json
{
  "id": 4,
  "title": "Dune: Çöl Gezegeni",
  "author": "Frank Herbert",
  "published_year": 1965,
  "genre": "Bilim Kurgu",
  "created_at": "2024-12-30T18:46:09.451Z"
}
```

### Kitap Sil
```http
https://book-api-prod.onrender.com/api/books/:id
```

**Response:**
```json
{
  "message": "Kitap başarıyla silindi"
}
```

## 🚀 Deploy Etme

1. Render.com'da yeni bir Web Service oluşturun
2. GitHub repo'nuzu bağlayın
3. Aşağıdaki ayarları yapın:

   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node src/index.js`
   - **Environment Variables:**
     ```
     DATABASE_URL=your_postgresql_url
     NODE_ENV=production
     ```

4. "Create Web Service" butonuna tıklayın
5. Deploy tamamlandıktan sonra migration'ı çalıştırın:
   ```bash
   node src/migrations/createBookTable.js
   ```

## 🛠 Yerel Geliştirme

1. Repo'yu klonlayın
```bash
git clone https://github.com/username/book-api.git
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

3. `.env` dosyasını oluşturun
```env
DATABASE_URL=your_postgresql_url
NODE_ENV=development
PORT=3000
```

4. Migration'ı çalıştırın
```bash
node src/migrations/createBookTable.js
```

5. Uygulamayı başlatın
```bash
npm start
```

