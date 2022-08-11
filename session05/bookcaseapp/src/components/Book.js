import React from 'react';
import PropTypes from "prop-types";

const Book =(props) => {
  return (
    <div>
      <h2 onClick={(addBook) => props.addBook(props.book.volumeInfo.title)}>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors}</h3>
    </div>
  );
  }
  Book.propTypes = {
    volumeInfo: PropTypes.shape({title: PropTypes.string.isRequired}),
    authors: PropTypes.array.isRequired
   };

//   return (
// <button onClick={() =>
// addBook(props.title)}> Add +</button>)
// }


// unidirectional data flow => can pass state form parent to child, not the other way

export default Book