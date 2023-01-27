import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addSingleBook } from '../redux/books/books';

const AddBook = () => {
  const categories = ['Fiction', 'Romance', 'Horror', 'Fantasy'];
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const createNewBook = (title, author, category) => ({
    id: uuidv4(),
    title,
    author,
    category,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = createNewBook(title, author, category);
    dispatch(addSingleBook(book)).unwrap();
    setTitle('');
    setAuthor('');
    setCategory(categories[0]);
  };

  return (
    <div className="mb-2">
      <div>
        <h3>Add a new book: </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <input className="border border-black mr-2" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border border-black" type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          {categories && categories.map((category) => (
            <option value={category} key={category}>{category}</option>
          ))}
        </select>
        <button type="submit" className="bg-gray-100 ml-5 p-2">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
