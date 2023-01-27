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
    <div className="my-10 bg-white max-w-7xl mx-auto p-5">
      <div className="flex items-center">
        <div className="w-7/12">
          <p className="font-bold text-gray-500">{category}</p>
          <h4 className="font-bold text-3xl">{title}</h4>
          <p className="text-blue-600">{author}</p>

          <div className="space-x-5 my-5">
            <button type="button" className="border-r-2 pr-3 text-blue-500">Comments</button>
            <button type="button" className="border-r-2 pr-3 text-blue-500" onClick={handleClick}>Remove</button>
            <button type="button" className="text-blue-500">Edit</button>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress" />
        </div>

        <div className="progress-stat pr-20">
          <p className="percentage-complete text-lg">64%</p>
          <p className="completed">Completed</p>
        </div>

        <div className="pl-5 border-l-2">
          <h1 className="text-gray-500 font-semibold">CURRENT CHAPTER</h1>
          <h4>Chapter 17</h4>
          <button type="button" className="mt-3 bg-[#0290ff] py-2 px-4 text-white font-semibold">Update Progress</button>
        </div>
      </div>
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
