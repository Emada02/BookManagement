import React, { useState } from 'react';

function EditBook({ book, handleSaveEdit, cancelEdit }) {
  const [formData, setFormData] = useState(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEdit(formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="edit-book-form">
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
      <div className="button-container">
        <button type="submit" className="submit-button">Save</button>
        <button type="button" onClick={cancelEdit} className="submit-button">Cancel</button>
      </div>
    </form>
  );
}

export default EditBook;

