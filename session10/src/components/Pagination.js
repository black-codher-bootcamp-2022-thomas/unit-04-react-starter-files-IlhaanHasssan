import React, { useState } from "react";

const Pagination = (props) => {
  const handleNextClick = () => {
    props.setStartIndex(props.startIndex + 10);
    console.log(props.startIndex);
  };

  const handlePreviousClick = () => {
    props.setStartIndex(props.startIndex - 10);
    console.log(props.startIndex);
  };

  return (
    <>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
};

export default Pagination;
