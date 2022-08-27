import React, { useState } from "react";

const Search = (props) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchBar(props.keyword);

  };

  const myStyle = {
    color: "red",
    borderRadius: "5px"
};

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p style={{color:"red"}}> {props.keyword && "Search for your favourite books here!"} </p>
        <div>
          <input
          style={myStyle}
            type="text"
            value={props.keyword}
            onChange={(e) => {
              props.setKeyword(e.target.value);
            }}
          />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default Search;
