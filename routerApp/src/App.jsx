import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AddBook from './components/addBook';
import AllBooks from './components/AllBooks';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const handleDelete = (bookToDelete) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book !== bookToDelete));
    }
  };

  const handleSaveEdit = (updatedBook, index) => {
    const updatedBooks = books.map((book, idx) =>
      idx === index ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="home-background">
          <p><h1>Welcome to Your Virtual Library!</h1></p><h3>Here you can manage your book entries, add new ones, and see what you have saved.</h3>
        </div>
        }
        />
        <Route path="/allbooks" element={<AllBooks books={books} handleDelete={handleDelete} handleSaveEdit={handleSaveEdit} />} />
        <Route path="/addbook" element={<AddBook addBook={addBook} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


