import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeSingleBook } from '../redux/books/books';

const Book = ({
  item_id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeSingleBook(item_id));
  };

  return (
    <div className="my-5">
      <p className="font-bold text-gray-500">{category}</p>
      <h4 className="font-bold text-3xl">{title}</h4>
      <p className="text-blue-600">{author}</p>
      <button type="button" className="bg-gray-100 p-2" onClick={handleClick}>Remove</button>
    </div>
  );
};

Book.defaultProps = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};

Book.propTypes = {
  item_id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

export default Book;
