import React, { useState } from 'react';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';

const AllBooks = ({ books, handleDelete, handleSaveEdit }) => {
  const [editingBookIndex, setEditingBookIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditingBookIndex(index);
  };

  const cancelEdit = () => {
    setEditingBookIndex(null);
  };

  return (
    <div className="books-container">
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="book-card">
            {editingBookIndex === index ? (
              <EditBook
                book={book}
                handleSaveEdit={(updatedBook) => {
                  handleSaveEdit(updatedBook, index);
                  setEditingBookIndex(null);
                }}
                cancelEdit={cancelEdit}
              />
            ) : (
              <>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Page Numbers: {book.pageNumbers}</p>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <DeleteBook book={book} handleDelete={handleDelete} />
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllBooks;

