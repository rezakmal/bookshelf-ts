# 📚 Bookshelf API - TypeScript

Bookshelf API (TS) is a fully typed RESTful API built with **TypeScript** and **Hapi.js**. It allows users to manage a collection of books in memory — adding, viewing, updating, and deleting book records. This project is a TypeScript version of the original [Bookshelf API](https://github.com/rezakmal/boookshelf) project with JavaScript.

## 🚀 How to Run This Project
1. Clone this repository:
```
git clone <repository-url>
cd bookshelf-ts
```

2. Install dependencies:
```
npm install
```

3. Start the server:
```
npm run start
```

The server will run at http://localhost:9000.


## 🔗 API Endpoints

### ➕ Add a New Book
- Method: `POST`
- Endpoint: `/books`
- Body Request:
  ```
  {
    "name": "string",
    "year": number,
    "author": "string",
    "summary": "string",
    "publisher": "string",
    "pageCount": number,
    "readPage": number,
    "reading": boolean
  }
  ```
- Success Response: `201`
    ```
    {
      "status": "success",
      "message": "Buku berhasil ditambahkan",
      "data": {
        "bookId": "string"
      }
  }
  ```

### 📚 Display All Books
- Method: `GET`
- Endpoint: `/books`
- Success Response: `200`
  ```
  {
    "status": "success",
    "data": {
      "books": [
        {
          "id": "string",
          "name": "string",
          "publisher": "string"
        }
      ]
    }
  }
  ```

### 📖 Get Book Details by ID
- Method: `GET`
- Endpoint: `/books/{bookId}`
- Success Response: `200`
  ```
  {
    "status": "success",
    "data": {
      "book": {
        "id": "string",
        "name": "string",
        "releaseYear": number,
        "author": "string",
        "summary": "string",
        "publisher": "string",
        "totalPages": number,
        "pagesRead": number,
        "finished": boolean,
        "isBeingRead": boolean,
        "insertedAt": "ISODate",
        "updatedAt": "ISODate"
      }
    }
  }
  ```
- Failed Response (Book Not Found): `404 Not Found`
  ```
  {
    "status": "fail",
    "message": "Buku tidak ditemukan"
  }
  ```

### ✏️ Update Book by ID
- Method: `PUT`
- Endpoint: `/books/{bookId}`
- Success Response: `200`
  ```
  {
    "status": "success",
    "message": "Buku berhasil diperbarui"
  }
  ```

### 🗑️ Delete Book by ID
- Method: `DELETE`
- Endpoint: `/books/{bookId}`
- Successful Response: `200`
  ```
  {
    "status": "success",
    "message": "Buku berhasil dihapus"
  }
  ```


## 🧠 Built With
- TypeScript
- Hapi.js
- nanoid (for generating unique IDs)


## 👤 Author
Created by me, rezakmal — as a submission for Dicoding Back-End Developer learning path.


## 📄 License
This project is licensed under the MIT License.
