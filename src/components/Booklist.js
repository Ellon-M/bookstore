import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Booklist = () => {
  const books = [
    {
      id: 0,
      title: 'Random Book Title',
      author: 'Author A',
    },
  ];

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book title={book.title} author={book.author} key={book.id} />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Booklist;
