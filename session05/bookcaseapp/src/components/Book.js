import React from 'react';
import PropTypes from "prop-types";
const Book =(props) => {
  return (
    <div>
      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors}</h3>
    </div>
  );

}
  Book.propTypes = {
    volumeInfo: PropTypes.shape({title: PropTypes.string.isRequired}),
    authors: PropTypes.array.isRequired
   };


export default Book;
