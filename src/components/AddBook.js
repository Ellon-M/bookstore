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
    <div className="mb-2 max-w-7xl mx-auto">
      <h3 className="text-gray-500 font-bold text-2xl">Add New Book</h3>

      <form onSubmit={handleSubmit} className="flex justify-between items-center">
        <input className="border border-[#a0a0a0] outline-none mr-2 p-2 w-[450px]" placeholder="Title" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <input className="border border-[#a0a0a0] outline-none mr-2 p-2 w-[450px]" placeholder="Author" type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <select className="py-3 px-5 outline-none cursor-pointer bg-white border rounded-md border-[#a0a0a0]" name="category" onChange={(e) => setCategory(e.target.value)}>
          {categories && categories.map((category) => (
            <option value={category} key={category}>{category}</option>
          ))}
        </select>

        <button type="submit" className="bg-[#0290ff] ml-2 py-2 px-10 text-white font-semibold">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
