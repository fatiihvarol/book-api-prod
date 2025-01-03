# Book API

A simple book management API using PostgreSQL database.

## 🌐 Live Demo
Base URL: `https://book-api-prod.onrender.com`

## 📚 API Endpoints

### GET - Fetch All Books
```bash
https://book-api-prod.onrender.com/api/books
```

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Dune",
    "author": "Frank Herbert",
    "published_year": 1965,
    "genre": "Science Fiction",
    "created_at": "2024-12-30T18:45:48.129Z"
  },
  {
    "id": 2,
    "title": "A Clockwork Orange",
    "author": "Anthony Burgess",
    "published_year": 1962,
    "genre": "Dystopian",
    "created_at": "2024-12-30T18:45:57.711Z"
  }
]
```

### GET - Fetch Single Book
```bash
https://book-api-prod.onrender.com/api/books/1
```

**Example Response:**
```json
{
  "id": 1,
  "title": "Dune",
  "author": "Frank Herbert",
  "published_year": 1965,
  "genre": "Science Fiction",
  "created_at": "2024-12-30T18:45:48.129Z"
}
```

### POST - Add New Book
```bash
https://book-api-prod.onrender.com/api/books
```

**Request Body:**
```json
{
  "title": "1984",
  "author": "George Orwell",
  "published_year": 1949,
  "genre": "Dystopian"
}
```

**Response:**
```json
{
  "id": 3,
  "title": "1984",
  "author": "George Orwell",
  "published_year": 1949,
  "genre": "Dystopian",
  "created_at": "2024-12-30T18:46:02.673Z"
}
```

### PUT - Update Book
```bash
https://book-api-prod.onrender.com/api/books/1
```

**Request Body:**
```json
{
  "title": "Dune: Desert Planet",
  "author": "Frank Herbert",
  "published_year": 1965,
  "genre": "Science Fiction"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Dune: Desert Planet",
  "author": "Frank Herbert",
  "published_year": 1965,
  "genre": "Science Fiction",
  "created_at": "2024-12-30T18:46:09.451Z"
}
```

### DELETE - Remove Book
```bash
https://book-api-prod.onrender.com/api/books/1
```

**Response:**
```json
{
  "message": "Book successfully deleted"
}
```

## 🚀 Deployment

1. Create a new Web Service on Render.com
2. Connect your GitHub repository
3. Configure the following settings:

   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node src/index.js`
   - **Environment Variables:**
     ```
     DATABASE_URL=your_postgresql_url
     NODE_ENV=production
     ```

4. Click "Create Web Service"
5. After deployment, run the migration:
   ```bash
   node src/migrations/createBookTable.js
   ```

## 🛠 Local Development

1. Clone the repository
```bash
git clone https://github.com/username/book-api.git
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```env
DATABASE_URL=your_postgresql_url
NODE_ENV=development
PORT=3000
```

4. Run migration
```bash
node src/migrations/createBookTable.js
```

5. Start the application
```bash
npm start
```

