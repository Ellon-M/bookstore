import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <h4>{title}</h4>
    <p>{author}</p>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
