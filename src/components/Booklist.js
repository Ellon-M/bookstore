import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Booklist = () => {
  const books = useSelector((state) => state.book);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book key={book.id} id={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Booklist;
