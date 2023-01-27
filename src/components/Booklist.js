import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getAllBooks } from '../redux/books/books';

const Booklist = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <ul key={book.id}>
          <Book
            item_id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        </ul>
      ))}
      <AddBook />
    </>
  );
};

export default Booklist;
