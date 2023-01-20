import React from "react";
import Book from "./Book";

const books = [
  {
    id: 0,
    title: '',
    author: '',
  }
];

const Booklist = () => {
  <>
    <ul>
      {books.map((book) => {
        <Book title={book.title} author={book.author} key={book.id} />
      })
      }
    </ul>
  </>
}

export default Booklist;