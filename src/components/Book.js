import React from "react";
import PropTypes from 'prop-types';

const Book = ({title, author}) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{author}</p>
    </li>
  )
}

Book.PropTypes = {
  title: PropTypes.string,
  author: PropTypes.string
}

export default Book;