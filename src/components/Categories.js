import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category[0]);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      {!category && <button type="button" onClick={handleClick}>Check Status</button>}
      <h1 className='category-status'>{category}</h1>
    </>
  );
};

export default Categories;
