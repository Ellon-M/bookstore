import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = uuidv4();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook({ id, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div>
        <h3>Add a new book: </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
