import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function AddBook({ addBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pageNumbers: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
    setFormData({ title: '', author: '', pageNumbers: '' }); 
    navigate('/allbooks'); 
  };

  return (
    <div className="add-book-container">
      <h1 className="form-title">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Book Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pageNumbers">Page Numbers:</label>
          <input
            type="number"
            id="pageNumbers"
            name="pageNumbers"
            value={formData.pageNumbers}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;


