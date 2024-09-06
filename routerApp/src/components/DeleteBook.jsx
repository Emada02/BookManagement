import React from 'react';

const DeleteBook = ({ book, handleDelete }) => {
  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      handleDelete(book);
    }
  };

  return (
    <button class='delete' onClick={confirmDelete}>Delete</button>
  );
};

export default DeleteBook;


